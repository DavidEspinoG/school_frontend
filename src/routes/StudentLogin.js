import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logStudent } from "../redux/login/loginSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const StudentLogin = () => {
  const dispatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const error = useSelector(state => state.login.error);
  const logged = useSelector(state => state.login.studentLogged);
  const navigate = useNavigate();

  useEffect(() => {
   if(logged) {
    navigate('/studentView')
   } 
  }, [logged, navigate])
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logStudent({email, password}))
  };
  return (
    <div className="main-border">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input 
          className="input"
          type="email" 
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
          type="submit"
        >
            Submit
        </button>
      </form>
      {error ? <p>The email or the password are not correct</p> : ''}
      <Link to="/" >Back</Link>
    </div>
  )
};

export default StudentLogin;

