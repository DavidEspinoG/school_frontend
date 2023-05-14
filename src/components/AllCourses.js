import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllCourses } from "../redux/courses/coursesSlice";
import { getStudentsOfCourse } from "../redux/students/studentsSlice";
import { useNavigate } from "react-router-dom";
import deleteCourse from "../utils/deleteCourse";

const AllCourses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.allCourses);

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, [dispatch])


  return (
    <>
      <h2>All Courses</h2>
      <div
        className="all-courses-admin"
      >
        {courses.map(element => {
          return (
            <div
              className="course-admin" 
              key={element.id} 
              >
              <p>{element.name}</p>
              <div className="display-flex">
                <button 
                  onClick={async () => {
                    await deleteCourse(element.id)
                    dispatch(fetchAllCourses());
                  }}
                  className="button"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    dispatch(getStudentsOfCourse(element.id));
                    navigate('/StudentsOfCourse');
                  }}
                  className="button"
                >
                  See students
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
};

export default AllCourses;