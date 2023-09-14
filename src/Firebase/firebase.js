// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsOw8IujGWdwhpYGNMnv_rjaDmh26iZzc",
  authDomain: "entrega-final-coder-react.firebaseapp.com",
  projectId: "entrega-final-coder-react",
  storageBucket: "entrega-final-coder-react.appspot.com",
  messagingSenderId: "606233017437",
  appId: "1:606233017437:web:bf4da17b866f931022e1b4",
  measurementId: "G-MWCMJ3EJZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)