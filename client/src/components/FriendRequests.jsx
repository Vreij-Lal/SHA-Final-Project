import axios from "axios";

import { useState, useEffect } from "react";

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
    <div>
      {props.username} sent you a friend userFriendRequests
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
}

export default FriendRequests;
