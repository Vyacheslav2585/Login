import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
const firebaseConfig = {
  apiKey: "AIzaSyBALtmvDC3RRgUNHiVODQ-how6LKfwC088",
  authDomain: "login-8839f.firebaseapp.com",
  projectId: "login-8839f",
  storageBucket: "login-8839f.appspot.com",
  messagingSenderId: "319950857025",
  appId: "1:319950857025:web:7dd4fecdaaf41c5309f7c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


