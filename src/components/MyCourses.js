import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStudentCourses } from "../redux/courses/coursesSlice";

const MyCourses = () => {
  const studentLogged = useSelector(state => state.login.studentLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    if(studentLogged) {
      dispatch(fetchStudentCourses(1));
    }
  })
  return (
    <div>
      <h2>My Courses</h2>
      {!studentLogged ? <p>Please log in to see this</p> : '' }
    </div>
  )
};

export default MyCourses;