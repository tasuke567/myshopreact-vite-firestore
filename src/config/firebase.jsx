import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyAz42eDHUGqbr85JjdqFUy6KZHL61HVY",
  authDomain: "myshopwey.firebaseapp.com",
  databaseURL:
    "https://myshopwey-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myshopwey",
  storageBucket: "myshopwey.appspot.com",
  messagingSenderId: "45589448356",
  appId: "1:45589448356:web:c4b2f24ffc7e0c916a4831",
  measurementId: "G-JYPVT0XN17",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
