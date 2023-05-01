import React from 'react'
import "../styles/ProfileFriendsCreator.scss";
import logo from '../Logo.png';
import axios from "axios";
import { useState, useEffect } from "react";

function ProfileFriendsCreator(props) {

  const [username, setUsername] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {
        setUsername(data.data.name);
      });
  }, [username]);

  const unfriendUser = () => {
    axios
    .post("http://localhost:8080/user/unfriend", {
      username:username,
      friendName:props.username,
    })
  }


  return (
    <section className='profile-friends-creator'>
        <img src={logo} alt="" />
        <h5 className='heading-5'>{props.username}</h5>
        <button className='button-1' onClick={unfriendUser}>Unfriend</button>
    </section>
  )
}

export default ProfileFriendsCreator