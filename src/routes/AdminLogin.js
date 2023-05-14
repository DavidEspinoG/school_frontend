import { useState } from "react";
import { logAdmin } from "../redux/login/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const logged = useSelector(state => state.login.adminLogged);
  const error = useSelector(state => state.login.adminError);
  const dispatch = useDispatch();

  useEffect(() => {
    if(logged) {
     navigate('/admin')
    } 
   }, [logged, navigate]);

  return (
    <div className="main-border">
      <h2>Admin Login</h2>
      <form 
        className="form"
        onSubmit={(e) => {
        e.preventDefault();
        dispatch(logAdmin({email, password}))
      }}>
        <input 
          className="input"
          type="text" 
          placeholder="Your email"
          value={email}  
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          className="input"
          type="password" 
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          className="button"
          type="submit">Submit</button>
      </form>
      {error ? <p>The email or the password are not correct</p> : ''}
      <Link to="/" className="back-button">Back</Link>
    </div>
  )
};

export default AdminLogin;

