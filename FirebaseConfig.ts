// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmK27mmHxP-bFKOuCGrdRKvXuww7yHYUU",
  authDomain: "skienna.firebaseapp.com",
  projectId: "skienna",
  storageBucket: "skienna.firebasestorage.app",
  messagingSenderId: "318884842515",
  appId: "1:318884842515:web:272aa594f468fac35283e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);