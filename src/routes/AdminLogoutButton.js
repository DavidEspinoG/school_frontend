import { useDispatch } from "react-redux";
import { adminLogOut } from "../redux/login/loginSlice";
import { useNavigate } from "react-router-dom";

const AdminLogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        dispatch(adminLogOut());
        navigate('/');
      }}
    >
      Log out
    </button>
  )
};

export default AdminLogoutButton;