import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getStudents } from "../redux/students/studentsSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getStudentDetail } from "../redux/students/studentsSlice";
import { getStudentDetailCourses } from "../redux/students/studentsSlice";
import apiUrl from "../utils/apiUrl";

const AllStudents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteStudent = async (id) => {
    const res = await axios.delete(`${apiUrl}/students/${id}`);
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
    <div>
      <h2 className="text-center">All Students</h2>
      {students.map(element => {
        return (
          <div key={element.id} className="all-students-container">
            <div>
              <p>Name: {element.name}</p>
              <p>Email: {element.email}</p>
            </div>
            <div className="all-students-buttons">
              <button
                className="button all-students-button "
                onClick={() => handleDelete(element.id)}
              >
                Delete Student
              </button>
              <button
                className="button all-students-button"
                onClick={() => {
                  dispatch(getStudentDetail(element.id));
                  dispatch(getStudentDetailCourses(element.id));
                  navigate(`/StudentDetail`)
                }}
              >
                Student's courses
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default AllStudents;