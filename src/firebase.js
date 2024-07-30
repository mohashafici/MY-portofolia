// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB7ztlEHUYC5XSk970aawsgJOJXxaIFTOQ",
    authDomain: "my-portofolia-cd677.firebaseapp.com",
    projectId: "my-portofolia-cd677",
    storageBucket: "my-portofolia-cd677.appspot.com",
    messagingSenderId: "982772322941",
    appId: "1:982772322941:web:374ec9227051a2c3175714",
    measurementId: "G-L9XM2GKMCS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
