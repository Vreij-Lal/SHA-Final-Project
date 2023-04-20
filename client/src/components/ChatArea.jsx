import React from "react";
import "../styles/ChatArea.scss";
function ChatArea() {
  return (
    <div class="chat-container">

        <div class="chat-area">

                <div class="chat-bubble">
                <p class="message">Hey there!</p>
                <span class="time">10:00 AM</span>
                </div>

                <div class="chat-bubble right">
                <p class="message">Hi! How can I help you?</p>
                <span class="time">10:02 AM</span>
                </div>

                <div class="chat-bubble">
                <p class="message">I have a question about my order.</p>
                <span class="time">10:05 AM</span>
                </div>
                
                <div class="chat-bubble right">
                <p class="message">Sure, what's your question?</p>
                <span class="time">10:06 AM</span>
                </div>
        </div>




        <div class="input-container">
            <input type="text" class="message-input" placeholder="Type your message..." />
            <button class="send-button">Send</button>
        </div>



    </div>
  )
}

export default ChatArea;