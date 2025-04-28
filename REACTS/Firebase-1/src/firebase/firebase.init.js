// DONOT SHARE FIREBASE CONFIG PUBLICLY
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7X_pNUBd0s6wD59hRD9lD3JpFatzI6Xo",
  authDomain: "simple-firebase-auth2-a4b59.firebaseapp.com",
  projectId: "simple-firebase-auth2-a4b59",
  storageBucket: "simple-firebase-auth2-a4b59.firebasestorage.app",
  messagingSenderId: "471568046945",
  appId: "1:471568046945:web:83d0d5fa5102a2270c4320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);