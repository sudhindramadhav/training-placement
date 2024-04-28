import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About'
import PlacementIncharge from './component/Placement_Incharge';
import Alumini from './component/Alumini';
import StudentLogin from './component/student/StudentLogin';
import StudentWorkshop from './component/student/StudentWorkshop';
import StudentInternship from './component/student/StudentInternship';
import StudentPlacementDrive from './component/student/StudentPlacementDrive';
import LoginPage from './component/loginPage/LoginPage';
import SignupPage from './component/loginPage/SignupPage';
import ForgotPassword from './component/loginPage/ForgotPassword';

function App() {
  return (
    <>
      <Router scrollRestoration="auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path = '/about' element={<About />}/>
          <Route path = '/placement_incharge' element={<PlacementIncharge />}/>
          <Route path = '/alumini' element={<Alumini />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<LoginPage/>}/>
          <Route path="/Signup" element={<SignupPage/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route path="/student_login" element={<StudentLogin/>} />
          <Route path="/studentworkshop" element={<StudentWorkshop/>} />
          <Route path = "/studentinternship" element={<StudentInternship/>}/>
          <Route path = "/studentplacementdrive" element={<StudentPlacementDrive/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
