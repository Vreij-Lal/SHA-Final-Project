import axios from "axios";
import { useState, useEffect } from "react";
import FriendRequests from "./FriendRequests";
import "../styles/Notifications.scss";
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
        setUserFriendRequests(data.data.friendRequests);
      });
  }, [userFriendRequests]);

  return (
    <section className="notification-section-container">
      <header>
        <h1 className="heading-1">Notifications</h1>
        
      </header>
      {userFriendRequests.length > 0 ? (
    userFriendRequests.map((Element) => {
      return <FriendRequests username={Element} />;
    })
  ) : (
    <section className="no-notifications">
      <p className="p">No notifications at the moment</p>
    </section>
  )}

    </section>
  );
}

export default Notification;
