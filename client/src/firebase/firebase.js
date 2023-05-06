// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgDNpDW_pFmbqRHYNWkWUh4Za9jBH__lQ",
  authDomain: "chataroony.firebaseapp.com",
  projectId: "chataroony",
  storageBucket: "chataroony.appspot.com",
  messagingSenderId: "140859825606",
  appId: "1:140859825606:web:7455b7c0dbfd148dc366c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);