import "../styles/ExploreUser.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../Logo.png";
function ExploreUser(props) {
  let [buttonBool, setButtonBool] = useState(false);
  let [username, setUsername] = useState("");
  let [sentFriendRequests, setSentFriendRequests] = useState([]);


  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {
        setSentFriendRequests(data.data.sentFriendRequests);
        setUsername(data.data.name);
        for(let i = 0; i < sentFriendRequests.length; i++){
          if(sentFriendRequests[i] == props.user.name){
            setButtonBool(true);
          }
        }

      })
  }, [sentFriendRequests]);
  



  const send =  () => {
    if (buttonBool == false) {
      axios
        .post("http://localhost:8080/user/sendFriendRequest", {
          sender: username,
          friendName: props.user.name,
        });
        return;
    }
     else if (buttonBool === true) {
       axios
        .post("http://localhost:8080/user/cancelFriendRequest", {
          sender: username,
          friendName: props.user.name,
        });
        return;
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
