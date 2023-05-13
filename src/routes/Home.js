import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStudents } from "../redux/students/studentsSlice";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import MyCourses from "../components/MyCourses";

const Home = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students);
  // const studentLogged = useSelector(state => state.login.studentLogged);
  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch])
  return(
    <>
      <Header />
      <h2>My Classmates</h2>
      <div>
        {students.map(element => {
          return (
            <div key={element.id}>
              <div>{element.name}</div>
              <div>{element.email}</div>
            </div>
          )
        })}
      </div>
      <MyCourses />
    </>
  )
}

export default Home;