import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getStudents } from "../redux/students/studentsSlice";
import axios from "axios";

const AllStudents = () => {
  const dispatch = useDispatch();
  const deleteStudent = async (id) => {
    const res = await axios.delete(`http://localhost:3000/students/${id}`);
    return res.data;
  };
  const handleDelete = async (id) => {
    await deleteStudent(id);
      dispatch(getStudents());
  };
  const students = useSelector(state => state.students.students);
  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch])
  return (
    <>
      <h2>All Students</h2>
      <div>
        {students.map(element => {
          return (
            <div key={element.id}>
              <div>{element.name}</div>
              <div>{element.email}</div>
              <div>
                <button
                  onClick={() => handleDelete(element.id)}
                >
                  Delete Student
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
};

export default AllStudents;