import React from "react";
import PostCreator from "./postCreator";
import Posts from "./Posts";
import "../styles/Home.scss";
function Home() {
  return (
    <div className="home-section-container">
      <div>
        <h1>home</h1>
      </div>
      <div>
        <PostCreator />
        <Posts />
      </div>
    </div>
  );
}

export default Home;
