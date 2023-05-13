import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const CreateNewGrades = ({courseId}) => {
  const [quarter, setQuarter] = useState(1);
  const [grade, setGrade] = useState(0);
  const [status, setStatus] = useState(true);
  const [error, setError] = useState(false);
  const studentId = useSelector(state => state.students.studentDetail.id);
  const postGrades = async (studentId, courseId, quarter, grade, status) => {
    try {
      const res = await axios.post(`http://localhost:3000/students/${studentId}/grades`, {
        quarter,
        grade,
        passed: status,
        course_id: courseId
      });
      return res.data;
    } catch (err) {
      console.log(err);
      setError(true)
    }
    
    
  };
    return (
        <>
          <h4>Create a new grade for this course</h4>
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              await postGrades(studentId, courseId, quarter, grade, status);

            }}
          >
            <input 
              type="number" 
              placeholder="Quarter" 
              min={1} 
              max={4} 
              defaultValue={1}
              onChange={(e) => {
                setQuarter(e.target.value);
              }}
            />
            <input type="number" placeholder="Grade" min={0} 
              max={10}
              onChange={(e) => {
                setGrade(e.target.value);
              }}
              />
            <select 
              name="select" 
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              >
              <option value="true">Approved</option>
              <option value="true">Not Approved</option>
            </select>
            <button type="Submit">Create</button>
          </form>
          {error && <p>Quarter value should be unique</p>}
        </>
    );
};

export default CreateNewGrades;