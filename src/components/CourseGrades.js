import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import deleteGrade from "../utils/deleteGrade";
import CourseGrade from "./CourseGrade";

const CourseGrades = ({ studentId, courseId, name }) => {
    const [grades, setGrades] = useState([]);
    const [ editable, setEditable ] = useState(false);
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
                <CourseGrade 
                  key={element.id}
                  id={element.id}
                  quarter={element.quarter}
                  grade={element.grade}
                  passed={element.passed}
                  getGrades={getGrades}
                  studentId={studentId}
                  courseId={courseId}
                />
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