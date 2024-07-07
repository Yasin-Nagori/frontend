import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0QVSRnyPOU09Kzg8FTEIaMz2RkJ8MtvE",
  authDomain: "twitter-clone-5e96d.firebaseapp.com",
  projectId: "twitter-clone-5e96d",
  storageBucket: "twitter-clone-5e96d.appspot.com",
  messagingSenderId: "519166971554",
  appId: "1:519166971554:web:8334b9e28035fd1f4051fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
