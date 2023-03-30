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
    <div>
      {posts.map((e) => {
        return (
          <div className="post-container">
            <div className="poster-info">
              <img src={logo} alt="" />
              <h4>{e.user}</h4>
            </div>
            <div className="post-img">
              <img src={e.image} />
            </div>
            <div className="post-desc">
              <p>{e.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
