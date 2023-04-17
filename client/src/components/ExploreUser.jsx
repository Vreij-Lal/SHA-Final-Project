import "../styles/ExploreUser.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../Logo.png";
function ExploreUser(props) {
  let [buttonBool, setButtonBool] = useState(false);
  let [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => setUsername(data.data.name));
  }, [username]);

  const send = () => {
    if (buttonBool == false) {
      axios
        .post("http://localhost:8080/user/sendFriendRequest", {
          sender: username,
          friendName: props.user.name,
        })
        .then((data) => alert(data));
    } else if (buttonBool === true) {
      axios
        .post("http://localhost:8080/user/cancelFriendRequest", {
          sender: username,
          friendName: props.user.name,
        })
        .then((data) => alert(data));
    }
  };
  return (
    <div className="explore-user-container">
      <img src={logo} alt="" />

      <h1>{props.user.name}</h1>
      <button
        onClick={() => {
          send();
          setButtonBool(!buttonBool);
        }}
        className="button-1"
      >
        {buttonBool ? "Requested" : "Add friend"}
      </button>
    </div>
  );
}

export default ExploreUser;
