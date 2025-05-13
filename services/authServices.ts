import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth"


// THIS FUNCTION AUTHENTICATES THE USERS EMAIL AND PASSWORD AND PASSES IT ON AS A STRING.
// IF SUCCESSFULLY AUTHENTICATED FROM FIREBASE, IT SHOULD ALLOW THE USER TO LOGIN
export const login_user = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};


//THIS FUNCTION ALLOWS THE LOGOUT FUNCTION TO WORK AND LET'S THE USER GO BACK TO LOGIN PAGE.
export const logout_user = async () => {
  await signOut(auth);
};
