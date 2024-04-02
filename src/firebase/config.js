// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZuWxK5zYwMqowmEiwvs0RmwURPdmzQZg",
  authDomain: "denen-portfolio.firebaseapp.com",
  projectId: "denen-portfolio",
  storageBucket: "denen-portfolio.appspot.com",
  messagingSenderId: "1085016469984",
  appId: "1:1085016469984:web:5ffde10ee3181445ff7b85",
  measurementId: "G-LJV7CTYEEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)