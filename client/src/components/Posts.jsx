import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/Posts.scss";
import logo from "../Logo.png";
function Posts() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get("http://localhost:8080/posts/getposts").then((d) => {
      setPosts(d.data);
      console.log(posts);
    });
  };

  return (
    <section className="post-wrapper">
      {posts.map((e) => {
        return (
          <section className="post-container">

            <section className="poster-info">
              <img src={logo} alt="" className="logo" />
              <h5 className="heading-5">{e.user}</h5>
            </section>

            <section className="post-img">
              <img src={e.image} />
            </section>

            <section className="post-desc">
              <p>{e.desc}</p>
            </section>

          </section>
        );
      })}
    </section>
  );
}

export default Posts;
