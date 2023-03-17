import React from "react";

import ProfileNavbar from "./ProfileNavbar";
import Profile from "./Profile";
import NewsBar from "./NewsBar";

function ProfilePage() {
  return (
    <div className="container">
      <ProfileNavbar />
      <Profile />
      <NewsBar />
    </div>
  );
}

export default ProfilePage;
