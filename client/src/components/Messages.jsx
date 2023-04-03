import "../styles/Messages.scss";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import UserFriends from "./UserFriends";
import axios from "axios";

const socket = io.connect("http://localhost:8080");

function Messages() {

  //room states
  const [room, setRoom] = useState("");

  //messages states
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    alert(message);
    socket.emit("send_message", { message, room });
  };

  const joinRoom = () => {
    if (room != "") {
      socket.emit("join_room", room);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  //setting the user friends array
  let [userFriends, setUserFriends] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/user/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => setUserFriends(data.data.friends));
  }, [userFriends]);


  //setting the user room array
  let [userRooms, setUserRooms] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => setUserRooms(data.data.rooms));
  }, [userRooms]);


  //getting friend room array
  const [data, setData] = useState('');

  const handleData = (childData) => {
    setData(childData);
    console.log(data);
  }



  return (

    <div className="messages-section-container">
    <h1>Messages</h1>

      <input
        placeholder="room number..."
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <button onClick={joinRoom}>join room</button>
      <input
        placeholder="Message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>send msg</button>
      <h1>{messageReceived}</h1>
      <div>
        {userFriends.map((element,index) => {

          return <UserFriends username={element} onData={handleData}/>
        })}
      </div>
    </div>

    
  );
}

export default Messages;
