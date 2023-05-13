import { useSelector } from "react-redux";
import AdminLogoutButton from "./AdminLogoutButton";
import { Link } from "react-router-dom";
const AdminView = () => {
  const adminLogged = useSelector(state => state.login.adminLogged);

  return (
    <>
    {adminLogged ? 
      <>
        <h1>Admin view</h1>
        <h2>All courses</h2>
        <h2>Create new student</h2>
        <h2>Create new course</h2>
        <h2>Edit students grades</h2>
        <AdminLogoutButton />
      </> 
    : 
    <>
      <p>You need to be logged in as admin to see this</p>
      <Link to="/">Home</Link>
    </>
    }
    </>
  )
};

export default AdminView;