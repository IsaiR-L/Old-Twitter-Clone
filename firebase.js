import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";         // Auth
import { getFirestore } from "firebase/firestore"; // Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBf4cwe5P7xFpYFiU6BGNYq3EV8892aN_M",
    authDomain: "og-twitter.firebaseapp.com",
    projectId: "og-twitter",
    storageBucket: "og-twitter.firebasestorage.app",
    messagingSenderId: "428979410685",
    appId: "1:428979410685:web:3f98ef1075e7fff9c59094",
    measurementId: "G-SP027NY6RZ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);