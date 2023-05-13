import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import StudentLogin from './routes/StudentLogin';
import AdminLogin from './routes/AdminLogin';
import MyGrades from './routes/MyGrades';
import AdminView from './routes/AdminView';
import StudentView from './routes/StudentView';
import StudentDetail from './routes/StudentDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="StudentLogin" element={<StudentLogin/>}/>
        <Route path="AdminLogin" element={<AdminLogin/>}/>
        <Route path="MyGrades" element={<MyGrades/>}/>
        <Route path="admin" element={<AdminView/>}/>
        <Route path="studentView" element={<StudentView/>} />
        <Route path="StudentDetail" element={<StudentDetail/>} />
        <Route path="*" element={<p>Not found</p>}/>
      </Routes>
    </>
  );
}

export default App;
