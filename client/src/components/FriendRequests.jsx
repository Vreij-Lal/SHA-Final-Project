import axios from "axios";
import "../styles/FriendRequests.scss";
import { useState, useEffect } from "react";
import logo from "../Logo.png";

function FriendRequests(props) {
  let [friendName, setFriendName] = useState("");
  let [username, setUsername] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {
        setUsername(data.data.name);
        setFriendName(props.username);
      });
  }, [username]);

  const handleAccept = () => {
    axios.post("http://localhost:8080/user/acceptFriendRequest", {
      friendName: friendName,
      username: username,
    });
  };

  return (
    <section className="friend-request-container">
      <img src={logo} alt="" />
      <h1>{props.username} sent you a friend request</h1>
      
      <button className="button-1" onClick={handleAccept}>Accept</button>
    </section>
  );
}

export default FriendRequests;
