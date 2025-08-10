// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn('VITE_FIREBASE_API'),
  authDomain: "yogi-mern-blog.firebaseapp.com",
  projectId: "yogi-mern-blog",
  storageBucket: "yogi-mern-blog.firebasestorage.app",
  messagingSenderId: "604593592555",
  appId: "1:604593592555:web:bccdbea2e884a087ad46ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app); 
const provider = new GoogleAuthProvider();

export { auth , provider} ;