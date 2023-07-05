// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4ZKK212_iAmcGA_xcVO_073Wpcwb95-g",
  authDomain: "social-network-cb7f2.firebaseapp.com",
  projectId: "social-network-cb7f2",
  storageBucket: "social-network-cb7f2.appspot.com",
  messagingSenderId: "252333461780",
  appId: "1:252333461780:web:54edc17e902309e69e3201",
  measurementId: "G-K5756040T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
