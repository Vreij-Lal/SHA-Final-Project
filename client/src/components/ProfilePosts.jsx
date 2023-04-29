import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/Posts.scss";
import logo from "../Logo.png";
function ProfilePosts() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [posts]);

  const getPosts = () => {
    axios.get("http://localhost:8080/posts/getposts").then((d) => {
      setPosts(d.data);
    });
  };

  let [username, setUsername] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {
        setUsername(data.data.name);
      });
  }, []);

  return (
    <section className="post-wrapper">
      {posts.map((e) => {
        if(e.user == username){
          return (
            <section className="post-container">
  
  
              <section className="post-img">
                <img src={e.image} />
              </section>
  
              <section className="post-desc">
                <p>{e.desc}</p>
              </section>
  
            </section>
          );
        }
      })}
    </section>
  );
}

export default ProfilePosts;