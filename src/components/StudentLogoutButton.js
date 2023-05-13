import { useDispatch } from "react-redux";
import { studentLogOut } from "../redux/login/loginSlice";
import { useNavigate } from "react-router-dom";

const StudentLogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        dispatch(studentLogOut());
        navigate('/');
      }}
    >
      Log out
    </button>
  )
};

export default StudentLogoutButton;