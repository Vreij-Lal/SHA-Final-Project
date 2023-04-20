/*import axios from "axios";
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

  const handleAccept =  async () => {
    await acceptFriendRequest();
    await createChat();

  };

  const acceptFriendRequest = async () => {
    await axios.post("http://localhost:8080/user/acceptFriendRequest", {
      friendName: friendName,
      username: username,
    });
  }

  const createChat = async () => {
    await axios.post("http://localhost:8080/chats/create", {
      userA:username, 
      userB:friendName,
    });
  }

  

  return (
    <section className="friend-request-container">
      <img src={logo} alt="" />
      <h1>{props.username} sent you a friend request</h1>
      
      <button className="button-1" onClick={handleAccept}>Accept</button>
    </section>
  );
}

export default FriendRequests;*/

import axios from "axios";
import "../styles/FriendRequests.scss";
import { useState, useEffect } from "react";
import logo from "../Logo.png";

function FriendRequests(props) {
  const [friendName, setFriendName] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {
        setUsername(data.data.name);
        setFriendName(props.username);
      });
  }, [props.username]);

  const handleAccept =  () => {
    acceptFriendRequest();
    createChat();
  };

  const acceptFriendRequest =  () => {
     axios.post("http://localhost:8080/user/acceptFriendRequest", {
      friendName: friendName,
      username: username,
    });
  };

  const createChat =  () => {
     axios.post("http://localhost:8080/chats/create", {
      userA: username,
      userB: friendName,
    });
  };

  return (
    <section className="friend-request-container">
      <img src={logo} alt="" />
      <h1>{props.username} sent you a friend request</h1>
      <button className="button-1" onClick={handleAccept}>
        Accept
      </button>
    </section>
  );
}

export default FriendRequests;
