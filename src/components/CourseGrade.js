import { useEffect, useState } from "react";
import deleteGrade from "../utils/deleteGrade";
import updateGrade from "../utils/updateGrade";

const CourseGrade = ({
    id,
    quarter, 
    grade, 
    passed, 
    getGrades,
    studentId,
    courseId
  }) => {
  const [ editable, setEditable ] = useState(false);
  const [ status, setStatus ] = useState('');
  const [ newPassed, setNewPassed ] = useState(passed);
  const [ newGrade, setNewGrade ] = useState(grade);
  useEffect(() => {
    if(passed) {
      setStatus('Approved')
    } else {
      setStatus('Not approved')
    }
  }, [passed])
  return (
    <div className="course-table-row" key={id}>
      <div>
        {!editable ?
          <p>{quarter}</p> :
          <input
            type="number"  
            defaultValue={quarter}
            min={1}
            max={4}
            readOnly
            required
          />
        }
      </div>
      <div>
        {!editable ?
          <p>{grade}</p> :
          <input
            type="number"  
            // defaultValue={grade}
            value={newGrade}
            onChange={(e) => {
              setNewGrade(e.target.value)
            }}
            min={0}
            max={10}
            required
          />
        }
      </div>
      <div>
        {!editable ?
          <p>{status}</p>
          : 
          <select 
            value={newPassed}
            onChange={(e) => {
              setNewPassed(e.target.value) 
            }}
            // defaultValue={passed}
            >
            <option 
              value={true}
              selected={passed}>Approved</option>
            <option 
              value={false}
              selected={!passed}>Not approved</option>
          </select>
        }
        
      </div>
      <div>
        <button
          onClick={() => {
            setEditable(prev => !prev);
          }}
          className="button margin-right"
        >
          {!editable ? 'Edit' : 'Cancel'}
        </button>
          {editable && 
          <button
            onClick={ async () => {
              // console.log(id, newPassed, newGrade)
              await updateGrade(id, newPassed, newGrade)
              getGrades(studentId, courseId);
              setEditable(false);

            }}
            className="button"
          >
            Save
          </button>}
      </div>
      <div>
        <button
          onClick={async() => {
            await deleteGrade(id);
            getGrades(studentId, courseId);
          }} 
          className="button"
        >
          Delete
        </button>
      </div>
    </div>
  )
};

export default CourseGrade;