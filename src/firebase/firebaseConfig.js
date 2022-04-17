import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHZdAEagmxVRitFBFIYNhai3ZClRP5E7U",
  authDomain: "as-7fe3a.firebaseapp.com",
  projectId: "as-7fe3a",
  storageBucket: "as-7fe3a.appspot.com",
  messagingSenderId: "523710897404",
  appId: "1:523710897404:web:b727dbe828523dbddccb79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
  app, 
  google, 
  facebook,
  db
}