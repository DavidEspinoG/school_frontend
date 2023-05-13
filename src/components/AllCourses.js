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
      <div>
        {courses.map(element => {
          return (
            <div key={element.id}>
              <div>{element.name}</div>
            </div>
          )
        })}
      </div>
    </>
  )
};

export default AllCourses;