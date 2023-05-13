import { useSelector, useDispatch } from "react-redux";
import { fetchCourseGrades } from "../redux/courses/coursesSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { cleanCurrentCourse } from "../redux/courses/coursesSlice";

const MyGrades = () => {
  const studentId = useSelector(state => state.login.currentStudent.id);
  const studentLogged = useSelector(state => state.login.studentLogged);
  const courseName = useSelector(state => state.courses.currentCourse.name);
  const courseId = useSelector(state => state.courses.currentCourse.id);
  const grades = useSelector(state => state.courses.currentCourseGrades);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if(courseId) {
      dispatch(fetchCourseGrades({studentId, courseId}))
    }
    if(!studentLogged){
      navigate('/');
    }

  },[dispatch, courseId, navigate, studentId, studentLogged]);
  return (
    <div className="main-border">
      <h1>{courseName}'s grades</h1>
      <div>
        {grades.map(element => {
          return (
            <>
              <div key={element.id}>
                <div>Quarter: {element.quarter} </div>
                <div>Grade: {element.grade} </div>
                <div>Status: {element.quarter ? 'Aproved' : 'Not aproved'} </div>
              </div>
            </>
          )
        })}
        <Link 
          to="/studentView" 
          onClick={() => {
            console.log('works')
            dispatch(cleanCurrentCourse())
          }}
        >
          Back
        </Link>
      </div>
    </div>
    
  )
};

export default MyGrades;