import { useState } from "react";
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

  return (
    <div className="course-table-row" key={id}>
      <div>
        <input
          type="text"  
          value={quarter}
          disabled={!editable}
        />
      </div>
      <div>
        <input  
          type="text"
          readOnly
          value={grade}
          disabled={!editable}
        />
        
      </div>
      <div>
        <select disabled={!editable}>
          <option 
            value={true}
            selected={passed}>Approved</option>
          <option 
            value={false}
            selected={!passed}>Not approved</option>
        </select>
      </div>
      <div>
        <button
          onClick={() => {
            setEditable(prev => !prev);
          }}
          className="button">Edit</button>
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