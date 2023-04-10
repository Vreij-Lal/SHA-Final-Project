import { useState, useEffect } from "react";
import axios from "axios";
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import "../styles/PostsCreator.scss"
//another test
import uploadImagePlaceholder from "../uploadImgPlaceholder.jpg";

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

 //test
 const [selectedFile, setSelectedFile] = useState(null);
 const handleFileChange = (event) => {
  setUploadedImage(event)
  const file = event;
  setSelectedFile(file);

  // Create a thumbnail URL
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    document.getElementById('thumbnail').style.backgroundImage = `url(${reader.result})`;
  };
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

 //another test
 const handleTextareaChange =  ( async (event) => {
  const res = await event;
  setDescription(res)
 } ) 

 return (
   <section className="post-creator-container">
    
    <header>
      <h4 className="heading-4">Create A Post</h4>
    </header>
    

    <section className="file-input">
      <input type="file" onChange={(event) => handleFileChange(event.target.files[0])}/>
      <div id="thumbnail"  style={{ backgroundImage: `url(${uploadImagePlaceholder})` }}></div>
    </section>
  
     
     <textarea class="comment-section" placeholder="What's on your mind?" onChange={(e) => handleTextareaChange(e.target.value)}></textarea>

     <button className="button-1" onClick={createPost}>Post</button>

   </section>
 );
}

export default PostCreator;
