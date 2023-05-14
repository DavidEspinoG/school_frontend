import axios from "axios";

const deleteGrade = async (id) => {
  const res = await axios.delete(`http://localhost:3000/grades/${id}`);
  console.log(res.data);
  return res.data;
};

export default deleteGrade;