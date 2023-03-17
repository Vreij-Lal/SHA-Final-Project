import React from "react";

import ProfileNavbar from "./ProfileNavbar";
import Explore from "./Explore";
import NewsBar from "./NewsBar";

function ExplorePage() {
  return (
    <div className="container">
      <ProfileNavbar />
      <Explore />
      <NewsBar />
    </div>
  );
}

export default ExplorePage;
