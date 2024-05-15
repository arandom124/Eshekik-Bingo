import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "bingo23-c15e6.firebaseapp.com",
  projectId: "bingo23-c15e6",
  storageBucket: "bingo23-c15e6.appspot.com",
  messagingSenderId: "265342010313",
  appId: "1:265342010313:web:c923985277fd46f2bb1e18",
  measurementId: "G-BBECFC1VDJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
