import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import '../styles/CourseGrades.css';
const CourseGrades = ({ studentId, courseId, name }) => {
    const [grades, setGrades] = useState([]);
    const getGrades = async (studentId, courseId) => {
      const res = await axios.get(`http://localhost:3000/students/${studentId}/courses/${courseId}/grades`);
      const grades = res.data;
      setGrades(grades);
    };
    useEffect(() => {
      getGrades(studentId, courseId);
    }, [studentId, courseId]);
    return (
        <>
          <h2>Grades for "{name}" course</h2>
          <button
            onClick={() => getGrades(studentId, courseId)}
          >Refresh</button>
          <div>
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
                    <button className="course-table-button">Edit</button>
                  </div>
                </div>
              )
            })}
          </div>
        </>
        
    );
};

export default CourseGrades;