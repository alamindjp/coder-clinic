// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB43lbsgz5OcmO_adfo5zwNtRmbStjsESs",
  authDomain: "coders-clinic-fc76f.firebaseapp.com",
  projectId: "coders-clinic-fc76f",
  storageBucket: "coders-clinic-fc76f.appspot.com",
  messagingSenderId: "344265180738",
  appId: "1:344265180738:web:4ca4db18fd9dabdfe44fdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
