import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getStudentDetailCourses } from "../redux/students/studentsSlice";
import { useSelector } from "react-redux";
import apiUrl from "../utils/apiUrl";

const CreateNewStudentCourse = () => {
  const [name, setName] = useState("");
  const [message, setMesssage] = useState("");
  const dispatch = useDispatch();
  const studentDetail = useSelector((state) => state.students.studentDetail);
  const postNewStudentCourse = async (courseName, studentId) => {
    const res = await axios.post(`${apiUrl}/students/${studentId}/courses`, {
      name: courseName,
    });
    setMesssage(res.data.message);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postNewStudentCourse(name, studentDetail.id);
    dispatch(getStudentDetailCourses(studentDetail.id));
  };  
  return (
    <div>
      <h2>Create a new course for this student</h2>
      <form
        className="form" 
        onSubmit={handleSubmit}>
        <input 
          className="input"
          type="text" 
          placeholder="Course name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button 
          className="button"
          type="submit">Submit</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default CreateNewStudentCourse;
