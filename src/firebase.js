import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4ZKK212_iAmcGA_xcVO_073Wpcwb95-g",
  authDomain: "social-network-cb7f2.firebaseapp.com",
  projectId: "social-network-cb7f2",
  storageBucket: "social-network-cb7f2.appspot.com",
  messagingSenderId: "252333461780",
  appId: "1:252333461780:web:54edc17e902309e69e3201",
  measurementId: "G-K5756040T2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
