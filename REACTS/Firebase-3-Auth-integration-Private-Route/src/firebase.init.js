// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// DANGER
const firebaseConfig = {
  apiKey: "AIzaSyBNaDzQLINZaMZm7uGxYzvCJb9VOVTW_w8",
  authDomain: "auth-integration-9eef5.firebaseapp.com",
  projectId: "auth-integration-9eef5",
  storageBucket: "auth-integration-9eef5.firebasestorage.app",
  messagingSenderId: "479516033193",
  appId: "1:479516033193:web:c965b88ff89cb65523a9b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);