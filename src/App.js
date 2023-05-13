import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import StudentLogin from './routes/StudentLogin';
import AdminLogin from './routes/AdminLogin';
import MyGrades from './routes/MyGrades';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="StudentLogin" element={<StudentLogin/>}/>
        <Route path="AdminLogin" element={<AdminLogin/>}/>
        <Route path="MyGrades" element={<MyGrades/>}/>
      </Routes>
    </>
  );
}

export default App;
