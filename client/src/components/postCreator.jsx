import { useState, useEffect } from "react";
import axios from "axios";
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

/*
function PostCreator() {

   const uploadImage =  async () =>{
     if(uploadedImage === null){
      alert("no image found")
       return;
     }
     else{
       const imageRef = ref(storage, `images/${uploadedImage.name + v4()}`)
       uploadBytes(imageRef, uploadedImage).then(async () => {
         alert("img uploaded")
        await getDownloadURL(imageRef).then( async(url) => { setImageUrl(url)});
       })
     }
   };

  const createPost = async () => {
    await uploadImage();
    axios
      .post("http://localhost:8080/auth/verify", {
        token: localStorage.getItem("token"),
      })
      .then((data) => {
         axios
          .post("http://localhost:8080/posts", {
            user: data.data.name,
            desc: description,
            image: imageUrl,
          })
          .then(alert("post created!"));
      });

  };
  //post description text state
  let [description, setDescription] = useState("");
  

  //firebase initialization 
  //post image upload state
  let [uploadedImage, setUploadedImage] = useState(null);

   //store img url
   let [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    console.log("url changed: "  + imageUrl);
  }, [imageUrl])

  return (
    <div>
      <h1>create a post</h1>
      <input
        type="text"
        placeholder="What's on your mind"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" onChange={(event) => setUploadedImage(event.target.files[0])}/>
      <button onClick={createPost}>Post</button>
    </div>
  );
}
*/

////////////////////////////////////


function PostCreator() {
   //post description text state
 let [description, setDescription] = useState("");
 

 //firebase initialization 
 //post image upload state
 let [uploadedImage, setUploadedImage] = useState(null);

  //store img url
  let [imageUrl, setImageUrl] = useState(null);

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
           image: imageUrl,
         })
         .then(alert("post created!"));
     });

 };


 useEffect( () => {
  if(uploadedImage != null){
    const imageRef = ref(storage, `images/${uploadedImage.name + v4()}`)
    uploadBytes(imageRef, uploadedImage).then(async () => {
      alert("img uploaded")
     getDownloadURL(imageRef).then( async(url) => { setImageUrl(url); console.log("url: " + imageUrl);});
    })
  }
  else{

    return;
  }

 }, [uploadedImage])

 return (
   <div>
     <h1>create a post</h1>
     <input
       type="text"
       placeholder="What's on your mind"
       onChange={(e) => setDescription(e.target.value)}
     />
     <input type="file" onChange={(event) => setUploadedImage(event.target.files[0])}/>
     <button onClick={createPost}>Post</button>
   </div>
 );
}

export default PostCreator;
