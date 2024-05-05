// import React,{useState,useEffect} from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar({ userPrivilege }) {
//   const [show,setShow]=useState(null);
//   useEffect(() => {
//     setShow(userPrivilege);
//   }, [userPrivilege]);

//   return (
//     <div>
//       <header className="text-gray-1000 body-font">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl">Placement Cell</span>
//           </Link>
//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"> 
//             <Link to="/Login" className="mr-5 hover:text-gray-900">Login</Link>
//             <Link to="/home" className="mr-5 hover:text-gray-900">Home</Link>
//             <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
//             <Link to="/placement_incharge" className="mr-5 hover:text-gray-900">Placement Incharge</Link>
//             <Link to="/alumini" className="mr-5 hover:text-gray-900">Alumni</Link>
//            {show!=="Admin"?<div></div>:<Link to="/student_login" className="mr-5 hover:text-gray-900">StudentLogin</Link>}
//            {show!=="Student"?<div></div>:<Link to="/incharge_login" className="mr-5 hover:text-gray-900">InchargeLogin</Link>}
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logout from './loginPage/Logout';

export default function Navbar({ userPrivilege,handleLogout }) {
  const [show, setShow] = useState(null);

  useEffect(() => {
    setShow(userPrivilege);
  }, [userPrivilege]);

  return (
    <div>
      <header className="text-gray-1000 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Placement Cell</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/home" className="mr-5 hover:text-gray-900">Home</Link>
            <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
            <Link to="/placement_incharge" className="mr-5 hover:text-gray-900">Placement Incharge</Link>
            <Link to="/alumini" className="mr-5 hover:text-gray-900">Alumni</Link>
            {show === "Student" && <Link to="/student_login" className="mr-5 hover:text-gray-900">StudentLogin</Link>}
            {show === "Admin" && <Link to="/incharge_login" className="mr-5 hover:text-gray-900">InchargeLogin</Link>} 
            {userPrivilege?null:<Link to="/Login" className="mr-5 hover:text-gray-900">Login</Link>}
            {userPrivilege ? <Logout handleLogout={handleLogout} /> : null}
          </nav>
        </div>
      </header>
    </div>
  );
}
