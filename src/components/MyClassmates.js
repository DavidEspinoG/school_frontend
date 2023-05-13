import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getStudents } from "../redux/students/studentsSlice";

const AllStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students);
  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch])
  return (
    <>
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
    </>
  )
};

export default AllStudents;