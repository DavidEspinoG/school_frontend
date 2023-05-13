import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import loginSlice from "../redux/login/loginSlice";

const { studentLogOut } = loginSlice.actions

const Header = () => {
  const studentLogged = useSelector(state => state.login.studentLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Amazing School</h2>
      <div>
        {!studentLogged ? 
          <NavLink to="/StudentLogin">Login (students)</NavLink> 
          : <button 
              type="button"
              onClick={() => dispatch(studentLogOut())}
            >
                Log out
            </button> }
       
        <NavLink to="/AdminLogin">Login (admins)</NavLink>
      </div>
    </div>
  )
};

export default Header;