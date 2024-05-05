// import React,{useState} from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Home from './component/Home';
// import Navbar from './component/Navbar';
// import About from './component/About'
// import PlacementIncharge from './component/Placement_Incharge';
// import Alumini from './component/Alumini';
// import StudentLogin from './component/student/StudentLogin';
// import StudentWorkshop from './component/student/StudentWorkshop';
// import StudentInternship from './component/student/StudentInternship';
// import StudentPlacementDrive from './component/student/StudentPlacementDrive';
// import LoginPage from './component/loginPage/LoginPage';
// import SignupPage from './component/loginPage/SignupPage';
// import ForgotPassword from './component/loginPage/ForgotPassword';
// import InchargeLogin from './component/incharge/InchargeLogin';
// import InchargeWorkshop from './component/incharge/InchargeWorkshop';
// import InchargeInternship from './component/incharge/InchargeInternship';
// import InchargePlacementDrive from './component/incharge/InchargePlacementDrive';
// import InchargeStudentRegistered from './component/incharge/InchargeStudentRegistered';
// import InchargeStudentResult from './component/incharge/InchargeStudentResult';
// import Retrieve from './component/loginPage/Retrieve';
// import AddWorkshops from './component/incharge/adding/AddWorkshops';
// import AddPlacement from './component/incharge/adding/AddPlacement';
// import AddInternship from './component/incharge/adding/AddInternship';
// import StudentPage from './component/studentsPage/StudentPage';
// import AdminPage from './component/studentsPage/AdminPage';
// import Logout from './component/loginPage/Logout';

// function App() {

//   const navigate = useNavigate();

//   const [userData, setUserData] = useState(() => {
//     const userDataFromStorage = localStorage.getItem('userData');
//     return userDataFromStorage ? JSON.parse(userDataFromStorage) : null;
//   });

//   const handleLogout = () => {
//     // Clear user data
//     setUserData(null);
//     localStorage.removeItem('userData');
//     // Navigate to the login page
//     navigate('/Login', { replace: true });
//     // Reload the page
//     window.location.reload();
//   };

//   const receiveDataFromLoginPage = (userPrivilege) => {
//     // Update state
//     setUserData(userPrivilege);
//     // Store userData in localStorage
//     localStorage.setItem('userData', JSON.stringify(userPrivilege));
//     console.log("Received data from LoginPage:", userPrivilege);
//   };
//   return (
//     <>
//       <Router scrollRestoration="auto">
//         <Navbar userPrivilege={userData} handleLogout={handleLogout}/>
//         <Routes>
//           <Route path='/' element={<Home />}/>
//           <Route path = '/about' element={<About />}/>
//           <Route path = '/placement_incharge' element={<PlacementIncharge />}/>
//           <Route path = '/alumini' element={<Alumini />}/>
//           <Route path="/home" element={<Home />} />

//           <Route path="/Login" element={<LoginPage getData={receiveDataFromLoginPage} />} />
//           <Route path="/signup" element={<SignupPage/>}/>
//           <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
//           <Route path="/Logout" element={<Logout/>}/>          

//           <Route path="/student_login" element={<StudentLogin />}/>
//           <Route path="/studentworkshop" element={<StudentWorkshop/>} />
//           <Route path = "/studentinternship" element={<StudentInternship/>}/>
//           <Route path = "/studentplacementdrive" element={<StudentPlacementDrive/>}/>

//           <Route path = "/incharge_login" element={<InchargeLogin/>}/>
//           <Route path = "/inchargeworkshop" element={<InchargeWorkshop/>}/>
//           <Route path = "/inchargeinternship" element={<InchargeInternship/>}/>
//           <Route path = "/inchargeplacementdrive" element={<InchargePlacementDrive/>}/>
//           <Route path = "/inchargestudentresult" element={<InchargeStudentResult/>}/>
//           <Route path = "/inchargestudentregistered" element={<InchargeStudentRegistered/>}/>

//           <Route path = "/studentPage" element={<StudentPage/>}/> 
//           <Route path = "/adminPage" element={<AdminPage/>}/>

//           <Route path = "/addplacement" element={<AddPlacement/>}/>
//           <Route path = "/addinternship" element={<AddInternship/>}/>
//           <Route path = "/addworkshop" element={<AddWorkshops/>}/>

//           <Route path = "/retrieve" element={<Retrieve/>}/>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import InchargeLogin from './component/incharge/InchargeLogin';
import InchargeWorkshop from './component/incharge/InchargeWorkshop';
import InchargeInternship from './component/incharge/InchargeInternship';
import InchargePlacementDrive from './component/incharge/InchargePlacementDrive';
import InchargeStudentRegistered from './component/incharge/InchargeStudentRegistered';
import InchargeStudentResult from './component/incharge/InchargeStudentResult';
import Retrieve from './component/loginPage/Retrieve';
import AddWorkshops from './component/incharge/adding/AddWorkshops';
import AddPlacement from './component/incharge/adding/AddPlacement';
import AddInternship from './component/incharge/adding/AddInternship';
import StudentPage from './component/studentsPage/StudentPage';
import AdminPage from './component/studentsPage/AdminPage';
import Logout from './component/loginPage/Logout';

function App() {
  const [userData, setUserData] = useState(() => {
    const userDataFromStorage = localStorage.getItem('userData');
    return userDataFromStorage ? JSON.parse(userDataFromStorage) : null;
  });

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('userData');
    window.location.href = '/';
  };

  const receiveDataFromLoginPage = (userPrivilege) => {
    setUserData(userPrivilege);
    localStorage.setItem('userData', JSON.stringify(userPrivilege));
    console.log("Received data from LoginPage:", userPrivilege);
  };

  return (
    <Router>
      <>
        <Navbar userPrivilege={userData} handleLogout={handleLogout}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path = '/about' element={<About />}/>
           <Route path = '/placement_incharge' element={<PlacementIncharge />}/>
           <Route path = '/alumini' element={<Alumini />}/>
           <Route path="/home" element={<Home />} />

           <Route path="/Login" element={<LoginPage getData={receiveDataFromLoginPage} />} />
           <Route path="/signup" element={<SignupPage/>}/>
           <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
           <Route path="/Logout" element={<Logout/>}/>          

           <Route path="/student_login" element={<StudentLogin />}/>
           <Route path="/studentworkshop" element={<StudentWorkshop/>} />
           <Route path = "/studentinternship" element={<StudentInternship/>}/>
           <Route path = "/studentplacementdrive" element={<StudentPlacementDrive/>}/>

           <Route path = "/incharge_login" element={<InchargeLogin/>}/>
           <Route path = "/inchargeworkshop" element={<InchargeWorkshop/>}/>
           <Route path = "/inchargeinternship" element={<InchargeInternship/>}/>
           <Route path = "/inchargeplacementdrive" element={<InchargePlacementDrive/>}/>
           <Route path = "/inchargestudentresult" element={<InchargeStudentResult/>}/>
           <Route path = "/inchargestudentregistered" element={<InchargeStudentRegistered/>}/>

           <Route path = "/studentPage" element={<StudentPage/>}/> 
           <Route path = "/adminPage" element={<AdminPage/>}/>

           <Route path = "/addplacement" element={<AddPlacement/>}/>
           <Route path = "/addinternship" element={<AddInternship/>}/>
           <Route path = "/addworkshop" element={<AddWorkshops/>}/>

           <Route path = "/retrieve" element={<Retrieve/>}/>
          
        </Routes>
      </>
    </Router>
  );
}

export default App;
