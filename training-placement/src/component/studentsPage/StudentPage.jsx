import React, { useEffect,useState } from 'react';

const StudentPage = () => {
  const [_id,set_Id]=useState("NULL");
  const [id,setId]=useState("NULL");
  const [password,setPassword]=useState("NULL");
  const [previlege,setPrevilege]=useState("NULL");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const liveuserString = urlParams.get('liveuser');
    const liveuser = JSON.parse(liveuserString);
    console.log(liveuser);
    set_Id(liveuser._id);
    setId(liveuser.id);
    setPassword(liveuser.password);
    setPrevilege(liveuser.previlege);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to AdminPage</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">_Id</th>
              <th className="border border-gray-400 px-4 py-2">Id</th>
              <th className="border border-gray-400 px-4 py-2">Password</th>
              <th className="border border-gray-400 px-4 py-2">Previlege</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="border border-gray-400 px-4 py-2">{_id}</td>
              <td className="border border-gray-400 px-4 py-2">{id}</td>
              <td className="border border-gray-400 px-4 py-2">{password}</td>
              <td className="border border-gray-400 px-4 py-2">{previlege}</td>
            </tr>
          </tbody>
      </table>
    </div>
    </div>
  );
};

export default StudentPage;
