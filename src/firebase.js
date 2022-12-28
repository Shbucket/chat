// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOa_7ND7_TUO0WKIzVNQVY_ztIJ80vgbY",
  authDomain: "napleschat-213a7.firebaseapp.com",
  projectId: "napleschat-213a7",
  storageBucket: "napleschat-213a7.appspot.com",
  messagingSenderId: "791992026541",
  appId: "1:791992026541:web:b24ef007b87f88aa278d24",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
