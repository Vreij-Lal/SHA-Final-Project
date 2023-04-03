import React from 'react'
import "../styles/UserFriends.scss";
import { useEffect, useState } from "react";
import axios from "axios";


function UserFriends(props) {

  const [childData, setChildData] = useState('');
  const [isActive, setIsActive] = useState(false);
  const sendDataToParent = () => {
    setIsActive(!isActive);
    axios
      .post("http://localhost:8080/user/getUserRoom",{
        username:props.username,
      })
      .then((data) => {
        setChildData(data.data.rooms)
        props.onData(childData);
      });
  }

  return (
    <div className={`userfriends-container ${isActive ? 'active' : ''}`} onClick={sendDataToParent}>
      <h1>{props.username}</h1>
    </div>
  );


}

export default UserFriends;
