import MyCourses from "../components/MyCourses";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentView = () => {
  const studentLogged = useSelector(state => state.login.studentLogged)
  return (
    <>
      <MyCourses />
      {!studentLogged && <Link to="/studentLogin">Student login</Link>}
      
    </>
  )
};

export default StudentView;