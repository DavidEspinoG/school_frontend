import { useSelector } from "react-redux";

const MyCourses = () => {
  const studentLogged = useSelector(state => state.login.studentLogged);
  
  return (
    <div>
      <h2>My Courses</h2>
      {!studentLogged ? <p>Please log in to see this</p> : '' }
    </div>
  )
};

export default MyCourses;