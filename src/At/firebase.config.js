// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTwjYrYdCebxyrDQR1X-eVtDNCPZ2TUvs",
  authDomain: "otp-at.firebaseapp.com",
  projectId: "otp-at",
  storageBucket: "otp-at.appspot.com",
  messagingSenderId: "643601941640",
  appId: "1:643601941640:web:7d40b379f3457d53ad4b3d",
  measurementId: "G-H2ML4XNF6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);