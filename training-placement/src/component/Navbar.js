import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <header classNameName="text-gray-1000 body-font">
        <div classNameName="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" classNameName="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span classNameName="ml-3 text-xl">Placement Cell</span>
          </Link>
          <nav classNameName="md:ml-auto flex flex-wrap items-center text-base justify-center"> 
            <Link to="/Login" classNameName="mr-5 hover:text-gray-900">Login</Link>
            <Link to="/home" classNameName="mr-5 hover:text-gray-900">Home</Link>
            <Link to="/about" classNameName="mr-5 hover:text-gray-900">About</Link>
            <Link to="/placement_incharge" classNameName="mr-5 hover:text-gray-900">Placement Incharge</Link>
            <Link to="/alumini" classNameName="mr-5 hover:text-gray-900">Alumni</Link>
            <Link to="/student_login" classNameName="mr-5 hover:text-gray-900">StudentLogin</Link>
            <Link to="/incharge_login" classNameName="mr-5 hover:text-gray-900">InchargeLogin</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
