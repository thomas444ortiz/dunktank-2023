import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEc-jMy45qBGysIX6y0MawCH9QHn-wDBs",
  authDomain: "dunktank-70cf4.firebaseapp.com",
  projectId: "dunktank-70cf4",
  storageBucket: "dunktank-70cf4.appspot.com",
  messagingSenderId: "184506192101",
  appId: "1:184506192101:web:27dd0a750a098f4475840c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
