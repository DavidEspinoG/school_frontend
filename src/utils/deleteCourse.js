import axios from "axios";

const deleteCourse = async (id) => {
  const res = await axios.delete(`http://localhost:3000/courses/${id}`);
  console.log(res.data);
  return res.data
};

export default deleteCourse;