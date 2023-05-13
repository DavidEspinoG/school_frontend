import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import loginSlice from "../redux/login/loginSlice";
import { adminLogOut } from "../redux/login/loginSlice";
const { studentLogOut } = loginSlice.actions

const Header = () => {
  const studentLogged = useSelector(state => state.login.studentLogged);
  const adminLogged = useSelector(state => state.login.adminLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Amazing School</h2>
      <div>
        {!studentLogged ? 
          <NavLink to="/StudentLogin">Login as student</NavLink> 
          : <button 
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

export default Header;