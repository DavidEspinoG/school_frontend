import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStudentCourses } from "../redux/courses/coursesSlice";
import { fetchCurrentCourse } from "../redux/courses/coursesSlice";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const navigate = useNavigate();
  const studentLogged = useSelector(state => state.login.studentLogged);
  const courses = useSelector(state => state.courses.courses);
  const currentStudentId = useSelector(state => state.login.currentStudent.id);
  const dispatch = useDispatch();
  useEffect(() => {
    if(studentLogged) {
      dispatch(fetchStudentCourses(1));
    }
  }, [studentLogged, dispatch])
  return (
    <div>
      <h2>My Courses</h2>
      {!studentLogged ? <p>Please log in to see this</p> : '' }
      <div>
        {courses.map(element => {
          return (
            <div key={element.id}>
              <p>{element.name}</p>
              <button
                onClick={() => {
                  dispatch(fetchCurrentCourse(element.id));
                  navigate('/MyGrades');
                }}
              >
                See my grades
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default MyCourses;