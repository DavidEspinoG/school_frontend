import { useSelector } from "react-redux";

const MyGrades = () => {
  const courseName = useSelector(state => state.courses.currentCourse.name)
  return (
    <h1>{courseName}'s grades</h1>
  )
};

export default MyGrades;