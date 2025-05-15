import { initializeApp, getApp, getApps } from "firebase/app";
import { initializeAuth, getAuth } from "firebase/auth"; // Auth
import { getFirestore } from "firebase/firestore"; // Firestore
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBf4cwe5P7xFpYFiU6BGNYq3EV8892aN_M",
  authDomain: "og-twitter.firebaseapp.com",
  projectId: "og-twitter",
  storageBucket: "og-twitter.firebasestorage.app",
  messagingSenderId: "428979410685",
  appId: "1:428979410685:web:3f98ef1075e7fff9c59094",
  measurementId: "G-SP027NY6RZ",
};
// Initialize the app if it hasn't been initialized yet
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = initializeAuth(app); // Use memory persistence for React Native
const db = getFirestore(app);






export { app, auth, db };