import MyCourses from "../components/MyCourses";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StudentLogoutButton  from "../components/StudentLogoutButton";

const StudentView = () => {
  const studentLogged = useSelector(state => state.login.studentLogged)
  return (
    <>
      <MyCourses />
      {!studentLogged && <Link to="/studentLogin">Student login</Link>}
      {studentLogged && <StudentLogoutButton /> }
    </>
  )
};

export default StudentView;