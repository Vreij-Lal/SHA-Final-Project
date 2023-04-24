import React from "react"
import "../styles/Chats.scss";


function Chats(props) {
    if(props.sender == props.user){
        return (
            <div class="chat-bubble right">
                <p class="message">{props.chat}</p>
            </div>
        );
    }
    else{
        return (
            <div class="chat-bubble">
                 <p class="message">{props.chat}</p>
            </div>
        );
    }
}

export default Chats;

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