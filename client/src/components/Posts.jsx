import axios from "axios";
import { useState, useEffect } from "react";

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
          <li>
            <img src={e.image} />
            <h1>{e.desc}</h1>
          </li>
        );
      })}
    </div>
  );
}

export default Posts;
