import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ProfileFriends.scss";
import ProfileFriendsCreator from './ProfileFriendsCreator';

function ProfileFriends() {

  let [userFriends, setUserFriends] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {setUserFriends(data.data.friends)});
  }, [userFriends]);


  return (
    <section className="profile-friends-container">
      {userFriends.map((e) => {
        return <ProfileFriendsCreator username={e}/>
      })}
    </section>
  )
}

export default ProfileFriends;