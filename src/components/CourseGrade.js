import { useEffect, useState } from "react";
import deleteGrade from "../utils/deleteGrade";

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
            defaultValue={grade}
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
          <select disabled={!editable}>
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
            onClick={() => {
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