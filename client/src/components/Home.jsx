import React from "react";
import PostCreator from "./postCreator";
import Posts from "./Posts";
import "../styles/Home.scss";
function Home() {
  return (
    <section className="home-section-container">
      <header>
        <h1 className="heading-1">Home</h1>
      </header>
      <section>
        <PostCreator />  
      </section>
      <section>
        <Posts />
      </section>
    </section>
  );
}

export default Home;
