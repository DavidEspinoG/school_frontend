import axios from "axios";
import apiUrl from "./apiUrl";

const deleteCourse = async (id) => {
  const res = await axios.delete(`${apiUrl}/courses/${id}`);
  return res.data
};

export default deleteCourse;