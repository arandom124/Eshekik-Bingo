import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-d95a0.firebaseapp.com",
  projectId: "react-d95a0",
  storageBucket: "react-d95a0.appspot.com",
  messagingSenderId: "918354961423",
  appId: "1:918354961423:web:c36c517162b29472066f7a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);