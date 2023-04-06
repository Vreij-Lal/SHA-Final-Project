import React from 'react'
import "../styles/UserFriends.scss";
import { useEffect, useState } from "react";
import axios from "axios";

{/*

function UserFriends(props) {


  const [childData, setChildData] = useState('');
  const [isActive, setIsActive] = useState(false);
  const sendDataToParent = async () => {
    setIsActive(!isActive);
   await axios
      .post("http://localhost:8080/user/getUserRoom",{
        username:props.username,
      })
      .then((data) => {
        setChildData(data.data.rooms)
        props.onData(childData, props.username);
      });
  }

  return (
    <div className={`userfriends-container ${isActive ? 'active' : ''}`} onClick={sendDataToParent}>
      <h1>{props.username}</h1>
    </div>
  );
} */}

function UserFriends(props) {


  const [childData, setChildData] = useState('');
  const [isActive, setIsActive] = useState(false);
  const sendDataToParent = async () => {
    setIsActive(!isActive);
    props.onData(childData, props.username);
  }

  useEffect( () => {
    
      axios
    .post("http://localhost:8080/user/getUserRoom",{
      username:props.username,
    })
    .then( (data) => 
      setChildData(data.data.rooms));
  },[])

  return (
    <div className={`userfriends-container ${isActive ? 'active' : ''}`} onClick={sendDataToParent}>
      <h1>{props.username}</h1>
    </div>
  );

  }

export default UserFriends;
