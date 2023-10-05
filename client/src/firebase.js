// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nature-field-real-estate.firebaseapp.com",
  projectId: "nature-field-real-estate",
  storageBucket: "nature-field-real-estate.appspot.com",
  messagingSenderId: "768277235232",
  appId: "1:768277235232:web:74ffc114b1ed837e759e45",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
