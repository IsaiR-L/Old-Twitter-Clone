import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

// Sign up user
export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Login user
export const login_user = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};