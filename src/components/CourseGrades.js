import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CourseGrades = ({ studentId, courseId, name }) => {
    const [grades, setGrades] = useState([]);
    const getGrades = async (studentId, courseId) => {
      const res = await axios.get(`http://localhost:3000/students/${studentId}/courses/${courseId}/grades`);
      const grades = res.data;
      setGrades(grades);
    };
    useEffect(() => {
      if(studentId) {
        getGrades(studentId, courseId);
      } 
    }, [studentId, courseId]);
    return (
        <>
          <h2>Grades for "{name}" course</h2>
          <div className="two-colors-table">
            <div className="course-table-row">
              <div>
                Quarter
              </div>
              <div>
                Grade
              </div>
              <div>
                Status
              </div>
              <div>
                Action
              </div>
              <div>
                Action
              </div>
            </div>
            {grades.map(element => {
              return (
                <div className="course-table-row" key={element.id}>
                  <div>
                    {element.quarter}
                  </div>
                  <div>
                    {element.grade}
                  </div>
                  <div>
                    {element.passed ? "Approved" : "Not Approved"}
                  </div>
                  <div>
                    <button  className="button">Edit</button>
                  </div>
                  <div>
                    <button  className="button">Delete</button>
                  </div>
                </div>
              )
            })}
          </div>
          <button
            className="button margin-right"
            onClick={() => getGrades(studentId, courseId)}
          >Refresh</button>
        </>
        
    );
};

export default CourseGrades;