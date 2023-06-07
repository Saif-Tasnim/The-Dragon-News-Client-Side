// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxUnuIOUWIZmHWvh9NpevS0eikN_vp-RE",
  authDomain: "the-dragon-news-4f1b8.firebaseapp.com",
  projectId: "the-dragon-news-4f1b8",
  storageBucket: "the-dragon-news-4f1b8.appspot.com",
  messagingSenderId: "607817223580",
  appId: "1:607817223580:web:283ed49536760ed907cc59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;