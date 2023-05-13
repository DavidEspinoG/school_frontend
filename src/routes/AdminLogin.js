import { useState } from "react";
import { logAdmin } from "../redux/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const logged = useSelector(state => state.login.adminLogged);
  const error = useSelector(state => state.login.adminError);
  const dispatch = useDispatch();

  useEffect(() => {
    if(logged) {
     navigate('/')
    } 
   }, [logged, navigate]);

  return (
    <div>
      <h3>Admin Login</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(logAdmin({email, password}))
      }}>
        <input 
          type="text" 
          placeholder="Your email"
          value={email}  
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error ? <p>The email or the password are not correct</p> : ''}
    </div>
  )
};

export default AdminLogin;

