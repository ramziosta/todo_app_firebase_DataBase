
import "firebase/firestore";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDSFAXSdIBH2NVbE5zU3nnhgh7Woc8M7Xg",
  authDomain: "todo-app-a60de.firebaseapp.com",
  projectId: "todo-app-a60de",
  storageBucket: "todo-app-a60de.appspot.com",
  messagingSenderId: "578231052890",
  appId: "1:578231052890:web:075190dc3e9fe6e7090663",
  measurementId: "G-Y7KG0YYK51",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;

