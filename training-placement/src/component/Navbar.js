import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logout from './loginPage/Logout';

export default function Navbar({ userPrivilege, handleLogout }) {
  const [show, setShow] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [small, setSmall] = useState(window.innerWidth <= 768);
  const style = "block w-auto px-4 py-2 mr-1 border border-transparent rounded transition duration-300 hover:text-white hover:bg-indigo-600";

  useEffect(() => {
    const handleResize = () => {
      setSmall(window.innerWidth <= 768);
      setToggle(window.innerWidth > 768); // Update toggle based on screen width
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShow(userPrivilege);
  }, [userPrivilege]);

  const toogleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <header className="text-gray-1000 body-font">
        <div className="flex items-center text-indigo-600 justify-between px-12">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white mt-4 p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 mt-4 text-xl text-indigo-600 md:mb-0">Placement Cell</span>
          </Link>
          <nav className={`${toggle && small ? 'z-50 flex items-center text-center absolute top-[64px] left-0 bg-indigo-600 w-full flex-col gap-1 text-white font-bold py-2 text-lg' : 'hidden md:flex md:items-center'}`}>
            <Link to="/home" className={style} onClick={toogleBtn}>Home</Link>
            <Link to="/about" className={style} onClick={toogleBtn}>About</Link>
            <Link to="/placement_incharge" className={style} onClick={toogleBtn}>Placement Incharge</Link>
            <Link to="/alumini" className={style} onClick={toogleBtn}>Alumni</Link>
            {show === "Student" && <Link to="/student_login" className={style} onClick={toogleBtn}>StudentLogin</Link>}
            {show === "Admin" && <Link to="/incharge_login" className={style} onClick={toogleBtn}>InchargeLogin</Link>}
            {userPrivilege ? null : <Link to="/Login" className={style} onClick={toogleBtn}>Login</Link>}
            {userPrivilege && <Logout handleLogout={handleLogout} onClick={toogleBtn}/>}
          </nav>
          <button className='md:hidden absolute right-[10px] p-2' onClick={toogleBtn}>{toggle ? 'X' : <i className='fa-solid fa-bars'></i>}</button>
        </div>
      </header>
    </div>
  );
}
