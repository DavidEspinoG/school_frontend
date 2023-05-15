import axios from "axios";
import apiUrl from "./apiUrl";

const deleteGrade = async (id) => {
  const res = await axios.delete(`${apiUrl}/grades/${id}`);
  console.log(res.data);
  return res.data;
};

export default deleteGrade;