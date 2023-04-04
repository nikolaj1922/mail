import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUjyrE06WjZy8MjJsDBxlRTnhF3HVVW9s",
  authDomain: "fir-a440f.firebaseapp.com",
  projectId: "fir-a440f",
  storageBucket: "fir-a440f.appspot.com",
  messagingSenderId: "421313471835",
  appId: "1:421313471835:web:66ae36d47e1d9708ef667e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
