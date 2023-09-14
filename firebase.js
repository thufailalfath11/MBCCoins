// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD--io4LMu2fDYgVlSPX3JOk25ePQ8ZYv0",
  authDomain: "mbccoin-d2c59.firebaseapp.com",
  projectId: "mbccoin-d2c59",
  storageBucket: "mbccoin-d2c59.appspot.com",
  messagingSenderId: "739484286448",
  appId: "1:739484286448:web:e725b5787459608324f135",
  measurementId: "G-QX0KS0BC43"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }