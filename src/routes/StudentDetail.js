import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanStudentDetail } from "../redux/students/studentsSlice";
import { useDispatch } from "react-redux";
import CreateNewStudentCourse from "../components/CreateStudentCourse";
import { cleanStudentDetailCourses } from "../redux/students/studentsSlice";
import CourseGrades from "../components/CourseGrades";
import CreateNewGrades from "../components/CreateNewGrades";

const StudentDetail = () => {
  const studentDetail = useSelector(state => state.students.studentDetail);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const studentDetailCourses = useSelector(state => state.students.studentDetailCourses);

  return (
    <>
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
            <CreateNewGrades courseId={element.id}/>
            </div>
        )})}
      </div>
      <CreateNewStudentCourse />
      <button
        onClick={() => {
          navigate(`/admin`);
          dispatch(cleanStudentDetail());
          dispatch(cleanStudentDetailCourses());
        }}
      >
        Back
      </button>
    </>
  )
};

export default StudentDetail;