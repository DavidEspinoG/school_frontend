import axios from "axios";

const updateGrade = async (id, passed, grade) => {
  const res = await axios.patch(`http://localhost:3000/grades/${id}`, {
    passed, 
    grade
  })
  return res.data;
};

export default updateGrade;