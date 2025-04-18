// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjdDUzUleyw7XqtrTONobNU9lSfHn_Knw",
  authDomain: "netflix-33d9d.firebaseapp.com",
  projectId: "netflix-33d9d",
  storageBucket: "netflix-33d9d.firebasestorage.app",
  messagingSenderId: "1084637339963",
  appId: "1:1084637339963:web:6226c6e8a6fee104b3171e",
  measurementId: "G-KFGZ339E3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();