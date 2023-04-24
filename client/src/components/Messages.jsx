import "../styles/Messages.scss";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import UserFriends from "./UserFriends";
import axios from "axios";

import ChatArea from "./ChatArea";

const socket = io.connect("http://localhost:8080");

function Messages() {

  //room states
  const [room, setRoom] = useState("");

  //messages states
  const [message, setMessage] = useState("");

  //
  const sendMessage =  () => {
    if(message && username && commonChatId){
      socket.emit("send_message", { message, username, commonChatId });
    }
    else{
      alert("select user")
    }
     
  };


   let [username, setUsername] = useState("");
   useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {setUsername(data.data.name)});
  }, [username]);
  

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
  const [friendChatsHistoryArray, setFriendChatsHistoryArray] = useState('');
  const  handleData  = (x, y, z) => {
      setFriendRooms((friendRooms) => friendRooms = x);
     setFriendName(friendName => friendName = y);
     setFriendChatsHistoryArray(friendChatsHistoryArray => friendChatsHistoryArray = z)
  }



//test
let [userChatsHistoryArray, SetUserChatHistory] = useState([]);
useEffect(() => {
  axios
    .post("http://localhost:8080/auth/verify", {
      token: localStorage.getItem("token"),
    })
    .then((data) => {SetUserChatHistory(data.data.chatsHistory)});
}, [userChatsHistoryArray]);



let [commonChatId, setCommonChatId] = useState(null);
useEffect(() => {
  if(userChatsHistoryArray && friendChatsHistoryArray){
    for(let i = 0; i < userChatsHistoryArray.length; i++){
      if(userChatsHistoryArray[i] == friendChatsHistoryArray[i]){
        setCommonChatId(userChatsHistoryArray[i]);
      }
    }
  }
}, [userChatsHistoryArray, friendChatsHistoryArray]);


let [chatsObject, setChatsObject] = useState([]);
let [chats, setChats] = useState(chatsObject.chats);
let [chatSender, setChatSender] = useState(chatsObject.chatSender);
useEffect(() => {
  axios
    .post("http://localhost:8080/chats/getchat", {
      id:commonChatId,
    })
    .then((data) => setChatsObject(data.data));
}, [commonChatId]);





  return (

    <section className="messages-section-container">
      <header>
        <h1 className="heading-1">Messages</h1>
      </header>
    
      <h4 className="heading-4">Your Friends</h4>
     
      <section className="friends-slider-container">
        
        {userFriends.map((element) => {
          return <UserFriends username={element} onData={handleData}/>
        })}
      </section>
      
      <h1>chat with {friendName} !</h1>


      <section className="chat-container">

        <section className="chat-area">
        
        {/* 
              <div class="chat-bubble">
                <p class="message">Hey there!</p>
              </div>
        */}
        
        {/*

          <div class="chat-bubble right">
            <p class="message">{messageReceived}</p>
          </div>

        */}

        </section>

        <section className="input-container">
          <input type="text" className="message-input" placeholder="Type your message..." onChange={(e) => {
            setMessage(e.target.value);
          }}/>
          <button className="send-button" onClick={sendMessage}>Send</button>
          <button onClick={() => {console.log(chats.chatSender);}}>get</button>
        </section>
        
      </section>

     

    </section>

    
  );
}

export default Messages;
