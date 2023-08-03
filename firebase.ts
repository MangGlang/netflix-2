// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDly2h5fQH5Hy60KmxM0wImfSLuVFWZ_E8",
  authDomain: "netflix-clone-25722.firebaseapp.com",
  projectId: "netflix-clone-25722",
  storageBucket: "netflix-clone-25722.appspot.com",
  messagingSenderId: "760914425818",
  appId: "1:760914425818:web:31f7cf2b034b9a34d5f2e3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth }
export { db }