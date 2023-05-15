// import axios from "axios";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getStudents } from "../redux/students/studentsSlice";
// import apiUrl from "../utils/apiUrl";

// const CreateNewCourse = () => {
//   const [student, setStu] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMesssage] = useState("");
//   const dispatch = useDispatch();
//   const postNewStudent = async (name, email, password) => {
//     const res = await axios.post(`${apiUrl}/students`, {
//       name,
//       email,
//       password,
//     });
//     setMesssage(res.data.message);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await postNewStudent(name, email, password);
//     dispatch(getStudents());
//   };  
//   return (
//     <div>
//       <h2>Create New Student</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Name" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Submit</button>
//         <p>{message}</p>
//       </form>
//     </div>
//   );
// };

// export default CreateNewCourse;
