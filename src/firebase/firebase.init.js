


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBJqZnOEzmc9gWXtbKYYC0b20o8akQXpw",
  authDomain: "front-21-simple-firebase-auth.firebaseapp.com",
  projectId: "front-21-simple-firebase-auth",
  storageBucket: "front-21-simple-firebase-auth.firebasestorage.app",
  messagingSenderId: "596450497094",
  appId: "1:596450497094:web:fb40e229716fab5867b047"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);