// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9wYFO0dKxq4wt_u-BudHHFdWjE3i7c6s",
  authDomain: "clinic-app-7dce3.firebaseapp.com",
  projectId: "clinic-app-7dce3",
  storageBucket: "clinic-app-7dce3.appspot.com",
  messagingSenderId: "782756997565",
  appId: "1:782756997565:web:ed3c64bd8f6abb9d434ad4",
  measurementId: "G-1N6W4GDLWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
