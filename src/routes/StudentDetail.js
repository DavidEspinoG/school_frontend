import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanStudentDetail } from "../redux/students/studentsSlice";
import { useDispatch } from "react-redux";
import CreateNewStudentCourse from "../components/CreateStudentCourse";
import { cleanStudentDetailCourses } from "../redux/students/studentsSlice";
import CourseGrades from "../components/CourseGrades";
import CreateNewGrades from "../components/CreateNewGrades";
import { useState } from "react";
import { useEffect } from "react";

const StudentDetail = () => {
  const studentDetail = useSelector(state => state.students.studentDetail);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const studentDetailCourses = useSelector(state => state.students.studentDetailCourses);
  const [ formIsVisible, setFormIsVisible ] = useState(false);
  const adminLogged = useSelector(state => state.login.adminLogged);
  useEffect(() => {
    if(!adminLogged) {
      navigate('/')
    }
  }, [adminLogged])
  return (
    <div className="main-border">
      <h2>{studentDetail.name}'s courses</h2>
      <div>
        {studentDetailCourses.map(element => {
          return (
            <div key={element.id}>
              <CourseGrades 
                studentId={studentDetail.id} 
                courseId={element.id} 
                name={element.name}
              />
              <button 
                onClick={() => {setFormIsVisible(prev => !prev)}}
                className="button "
              >
                {formIsVisible ? 'Hide form' : 'Add new grade'}
              </button>
            {formIsVisible && <CreateNewGrades 
              courseId={element.id}
              setFormIsVisible={setFormIsVisible}
              />}
            </div>
        )})}
      </div>
      <CreateNewStudentCourse />
      <button
        className="button"
        onClick={() => {
          navigate(`/admin`);
          dispatch(cleanStudentDetail());
          dispatch(cleanStudentDetailCourses());
        }}
      >
        Back
      </button>
    </div>
  )
};

export default StudentDetail;
