import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStudentCourses } from "../redux/courses/coursesSlice";

const MyCourses = () => {
  const studentLogged = useSelector(state => state.login.studentLogged);
  const courses = useSelector(state => state.courses.courses);
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
              <button>See my grades</button>
            </div>
          )
        })}
      </div>
      
    </div>
  )
};

export default MyCourses;