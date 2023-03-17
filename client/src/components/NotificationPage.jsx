import React from "react";

import ProfileNavbar from "./ProfileNavbar";
import Notification from "./Notification";
import NewsBar from "./NewsBar";

function NotificationPage() {
  return (
    <div className="container">
      <ProfileNavbar />
      <Notification />
      <NewsBar />
    </div>
  );
}

export default NotificationPage;
