import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [data, setData] = useState({ id: '', password: '' });
  const { id, password } = data;
  const [liveuser,setLiveuser] = useState([]);
  const [loginerror,setLoginerror] = useState('');

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/signup', data);
      console.log("Signup successful");
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/login', data).then(res=>{
        setLiveuser(res.data.user);
        if(res.data.message==="Login successful"){
        if(liveuser.previlege=== "Admin"){
          window.location.href = '/adminPage';
        }
        else if(liveuser.previlege=== "Student"){
          window.location.href = '/studentPage';
        }
      }
      else{
        setLoginerror("Sorry you are not a user");
        console.log(loginerror);
      }
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                User Id
              </label>
              <div className="mt-2">
                <input
                  id="id"
                  name="id"
                  type="text"
                  onChange={changeHandler}
                  value={id}
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={changeHandler}
                  value={password}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={loginHandler}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account? 
            <button onClick={signupHandler} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;