import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { initializeAuth, getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";

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
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

let auth: Auth;

if (Platform.OS === "web") {
  auth = getAuth(app); // Use default for web
} else {
  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage), // Use React Native persistence
    });
  } catch (e) {
    console.error("Error initializing Firebase Auth:", e);
    auth = getAuth(app); // Fallback if auth is already initialized
  }
}

const db: Firestore = getFirestore(app);

export { app, auth, db };