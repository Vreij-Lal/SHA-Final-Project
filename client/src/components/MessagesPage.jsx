import React from 'react'

import ProfileNavbar from "./ProfileNavbar";
import Messages from './Messages';
import NewsBar from "./NewsBar";

function MessagesPage() {
  return (
    <div className="container">
        <ProfileNavbar/>
        <Messages/>
        <NewsBar/>
    </div>
  )
}

export default MessagesPage