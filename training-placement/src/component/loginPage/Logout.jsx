import React from 'react';

const Logout = ({ handleLogout }) => {
  const logoutHandler = () => {
    handleLogout(null);
  };

  return (
    <button onClick={logoutHandler} className="mr-5 hover:text-gray-900">
      Logout
    </button>
  );
};

export default Logout;