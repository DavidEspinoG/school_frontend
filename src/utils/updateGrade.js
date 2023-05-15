import axios from "axios";
import apiUrl from "./apiUrl";

const updateGrade = async (id, passed, grade) => {
  const res = await axios.patch(`${apiUrl}/grades/${id}`, {
    passed, 
    grade
  })
  return res.data;
};

export default updateGrade;