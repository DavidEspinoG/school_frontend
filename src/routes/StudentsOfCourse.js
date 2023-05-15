import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import apiUrl from "../utils/apiUrl";

const StudentsOfCourse = () => {
  const studentsOfCourse = 
    useSelector(state => state.students.studentsOfCourse);
  return (
    <div className="main-border">
      <h2>Students</h2>
      <div>
        {studentsOfCourse.map(element => {
          return (
            <div key={element.id}>
              <p>{element.name}</p>
            </div>
          )
        })}
      </div>
      {studentsOfCourse.length == 0 && <p>This course has no students</p>}
      <Link to="/admin">Back</Link>
    </div>
  )
};

export default StudentsOfCourse;