// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8IKaeUKPVknWWob0xuJ1v41uVUwxZrw0",
  authDomain: "the-sun-hotel-46c33.firebaseapp.com",
  projectId: "the-sun-hotel-46c33",
  storageBucket: "the-sun-hotel-46c33.appspot.com",
  messagingSenderId: "906458394804",
  appId: "1:906458394804:web:0615b093229753335fa7e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
