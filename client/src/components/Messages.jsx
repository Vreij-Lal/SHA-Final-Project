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

  const sendMessage =  () => {
    
     socket.emit("send_message", { message, room });
  };

  const joinRoom = async () => {
    if (room != "") {
      console.log("rooooom: ", room);
       socket.emit("join_room", room);

    }
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

   //setting the user room array
   let [userRooms, setUserRooms] = useState("");
   useEffect(() => {
     axios
       .post("http://localhost:8080/auth/verify", {
         token: localStorage.getItem("token"),
       })
       .then((data) => {setUserRooms(data.data.rooms)});
   }, [userRooms]);
   

  //setting the user friends array
  let [userFriends, setUserFriends] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {setUserFriends(data.data.friends)});
  }, [userFriends]);

  
  //getting friend room array
  const [friendRooms, setFriendRooms] = useState('');
  const [friendName, setFriendName] = useState("");
  const  handleData  = (x, y) => {
      setFriendRooms((friendRooms) => friendRooms = x);
     setFriendName(friendName => friendName = y)
  }
  

    //for setting main socket room state to the common room number friends share
    const handleFindFirstCommonValue = async () => {
      for (let i = 0; i < userRooms.length; i++) {
        for (let j = 0; j < friendRooms.length; j++) {
          if (userRooms[i] === friendRooms[j]) {
            setRoom(userRooms[i])
             joinRoom()
            return;
          }
        }
      }
    };



useEffect(() => {
  handleFindFirstCommonValue()
}, [handleData]);

  return (

    <div className="messages-section-container">
    <h1>Messages</h1>

     
      <div>
        {userFriends.map((element) => {

          return <UserFriends username={element} onData={handleData}/>
        })}
      </div>
      <h1>chat with {friendName} !</h1>
      <h1>{messageReceived}</h1>
      <input
        placeholder="Message..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>send msg</button>
     
    </div>

    
  );
}

export default Messages;
