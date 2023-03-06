import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd6r6DB-gPT6eE1avdqLzQrfpPv7-Mj6A",
  authDomain: "sha-final-project.firebaseapp.com",
  projectId: "sha-final-project",
  storageBucket: "sha-final-project.appspot.com",
  messagingSenderId: "931739078126",
  appId: "1:931739078126:web:c4719cec5be58d062112ff",
  measurementId: "G-1FCHB951Y6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
