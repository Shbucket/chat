// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAmOW6Q2V9L4_OV0boH-_gO1ISDLSGZ998",
  authDomain: "chat-2e6c0.firebaseapp.com",
  projectId: "chat-2e6c0",
  storageBucket: "chat-2e6c0.appspot.com",
  messagingSenderId: "895418142054",
  appId: "1:895418142054:web:26d6331bbf9de18cb3cca7",
  measurementId: "G-Y7JR7XHVF3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();