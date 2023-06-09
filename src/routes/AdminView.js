import { useSelector } from "react-redux";
import AdminLogoutButton from "./AdminLogoutButton";
import { Link } from "react-router-dom";
import AllStudents from "../components/AllStudents";
import AllCourses from "../components/AllCourses";
import CreateNewStudent from "../components/CreateNewStudent";

const AdminView = () => {
  const adminLogged = useSelector(state => state.login.adminLogged);

  return (
    <div className="main-border ">
    {adminLogged ? 
      <>
        <AllStudents />
        <AllCourses />
        <CreateNewStudent />
        <AdminLogoutButton />
      </> 
    : 
    <>
      <p>You need to be logged in as admin to see this</p>
      <Link to="/">Home</Link>
    </>
    }
    </div>
  )
};

export default AdminView;