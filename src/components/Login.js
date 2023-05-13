import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import loginSlice from "../redux/login/loginSlice";
import { adminLogOut } from "../redux/login/loginSlice";
import '../styles/Login.css';
const { studentLogOut } = loginSlice.actions

const Login = () => {
  const studentLogged = useSelector(state => state.login.studentLogged);
  const adminLogged = useSelector(state => state.login.adminLogged);
  const dispatch = useDispatch();
  return (
    <div className="login-container">
      <h1>Amazing School</h1>
      <div className="login-links">
        {!studentLogged ? 
          <NavLink to="/StudentLogin">Login as student</NavLink> 
          : <button 
              className="button"
              type="button"
              onClick={() => dispatch(studentLogOut())}
            >
                Student log out
            </button> }
        {!adminLogged ? 
          <NavLink to="/AdminLogin">Login as admin</NavLink>
          : <button 
              type="button"
              onClick={() => dispatch(adminLogOut())}
            >
                Admin log out
            </button> }
      </div>
    </div>
  )
};

export default Login;