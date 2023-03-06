import { useState } from "react";
import axios from "axios";

//firebase
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

function PostCreator() {
  let [description, setDescription] = useState("");
  let [img, setImg] = useState("");

  //firebase
  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };
  const storageRef = ref(storage, `/images/${img.name}`);
  const fileRef = ref(storageRef, img.name); // create file reference
  const uploadTask = uploadBytesResumable(fileRef, img);
  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {
      console.log(error);
    },
    () => {
      // on complete

      getDownloadURL(uploadTask.ref).then(async (imgUrl) => {
        try {
          //await axios.post("");
        } catch (error) {
          console.log(error);
        }
      });
    }
  );

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
        type="file"
        onChange={(e) => {
          handleImageUpload(e);
        }}
      />
      <button onClick={createPost}>Post</button>
    </div>
  );
}

export default PostCreator;
