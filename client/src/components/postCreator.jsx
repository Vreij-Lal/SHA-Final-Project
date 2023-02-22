import { useState } from "react";
import axios from "axios";

function PostCreator() {
  let [description, setDescription] = useState("");
  let [img, setImg] = useState("");

  const createPost = () => {
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {
        axios
          .post("http://localhost:8080/posts", {
            user: data.data.name,
            desc: description,
            image: img,
          })
          .then(alert("post created!"));
      });
  };

  return (
    <div>
      <h1>create a post</h1>
      <input
        type="text"
        placeholder="What's on your mind"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter image url"
        onChange={(e) => setImg(e.target.value)}
      />
      <button onClick={createPost}>Post</button>
    </div>
  );
}

export default PostCreator;
