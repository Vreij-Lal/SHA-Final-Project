import React from 'react'
import "../styles/UserFriends.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from '../Logo.png';

function UserFriends(props) {
  const [childData, setChildData] = useState('');

  const sendDataToParent = async () => {
    props.onData(childData, props.username, friendChatsHistoryArray);
  }

  useEffect( () => {
    
      axios
    .post("http://localhost:8080/user/getUserRoom",{
      username:props.username,
    })
    .then( (data) => 
      setChildData(data.data.rooms));
  },[])

  const [friendChatsHistoryArray, setFriendChatsHistoryArray] = useState('');
  useEffect( () => {
    
    axios
  .post("http://localhost:8080/chats/getchatshistoryarray",{
    name:props.username,
  })
  .then( (data) => 
  setFriendChatsHistoryArray(data.data));
},[])
  

  return (
    <section className="user-friends-container" onClick={sendDataToParent}>
      <img src={logo} alt="" className="profile" />
      <h1>{props.username}</h1>
    </section>
  );

  }

export default UserFriends;
