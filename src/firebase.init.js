// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxLp-TOF3ECySNlllEuAxZRbnTbhyZUDE",

  authDomain: "coders-clinic-djp.firebaseapp.com",

  projectId: "coders-clinic-djp",

  storageBucket: "coders-clinic-djp.appspot.com",

  messagingSenderId: "889476065917",

  appId: "1:889476065917:web:87c02f07752d9c1cb5df14",

  measurementId: "G-19DG2LF5X6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
