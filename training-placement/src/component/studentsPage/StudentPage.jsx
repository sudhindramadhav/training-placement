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
    <div>
      <div>Welcome to StudentPage</div>
      <div>_id : {_id}</div>
      <div>id : {id}</div>
      <div>password : {password}</div>
      <div>previlege : {previlege}</div>
    </div>
  );
};

export default StudentPage;
