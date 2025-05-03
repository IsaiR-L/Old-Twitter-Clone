import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'; // Auth
import { getFirestore } from "firebase/firestore"; // Firestore
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; //async storage

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
export const app = initializeApp(firebaseConfig);

// Export Firebase services
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
export const db = getFirestore(app);
export { auth };