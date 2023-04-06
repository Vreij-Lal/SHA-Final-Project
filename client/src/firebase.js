// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm0RIgMrOcwP0rO0YuouvykPPBpVotJeo",
  authDomain: "sha-final-project-dd6d2.firebaseapp.com",
  projectId: "sha-final-project-dd6d2",
  storageBucket: "sha-final-project-dd6d2.appspot.com",
  messagingSenderId: "57826139855",
  appId: "1:57826139855:web:8019c47c1d5764b4f3e1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
