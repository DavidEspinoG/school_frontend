import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllCourses } from "../redux/courses/coursesSlice";


const AllCourses = () => {
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
            </div>
          )
        })}
      </div>
    </>
  )
};

export default AllCourses;