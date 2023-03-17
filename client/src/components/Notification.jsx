import axios from "axios";
import { useState, useEffect } from "react";
import FriendRequests from "./FriendRequests";
function Notification() {
  let [username, setUsername] = useState("");
  let [userFriendRequests, setUserFriendRequests] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {
        setUsername(data.data.name);
        setUserFriendRequests([...data.data.friendRequests]);
        console.log(userFriendRequests);
      });
  }, [username]);
  return (
    <div className="notification-section-container">
      <div>
        <h1>Notifications</h1>
      </div>
      {userFriendRequests.map((Element) => {
        return <FriendRequests username={Element} />;
      })}
    </div>
  );
}

export default Notification;
