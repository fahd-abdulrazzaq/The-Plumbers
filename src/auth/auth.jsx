// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyYw3BrkE02ViEqgCHwI88fBcoU2GAPlQ",
  authDomain: "sigmalearningplatform.firebaseapp.com",
  projectId: "sigmalearningplatform",
  storageBucket: "sigmalearningplatform.appspot.com",
  messagingSenderId: "602707197254",
  appId: "1:602707197254:web:86751c3525197c9805b947",
  measurementId: "G-N1RG31K6X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize service
export const db = getFirestore()

export const coursesRef = collection(db, 'courses');

export default app;