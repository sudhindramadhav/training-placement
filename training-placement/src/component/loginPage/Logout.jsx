import React from 'react';

const Logout = ({ handleLogout }) => {
  const logoutHandler = () => {
    handleLogout(null);
  };
  const style = "block w-auto px-4 py-2 mr-1 border border-transparent rounded transition duration-300 hover:text-white hover:bg-indigo-600";

  return (
    <button onClick={logoutHandler}  className={style} /*className="mr-5 hover:text-gray-900"*/>
      Logout
    </button>
  );
};

export default Logout;