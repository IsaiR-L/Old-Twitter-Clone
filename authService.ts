import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";

// THIS FUNCTION AUTHENTICATES THE USERS EMAIL AND PASSWORD AND PASSES IT ON AS A STRING.
// IF SUCCESSFULLY AUTHENTICATED FROM FIREBASE, IT SHOULD ALLOW THE USER TO LOGIN
export const login_user = async (email: string, password: string) => {
  try{
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

// Sign up user
export const signUp = async (email: string, password: string, username: string) => {
  try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        username: username,
        email: email,
      });
      console.log('User signed up:', userCredential);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};

//THIS FUNCTION ALLOWS THE LOGOUT FUNCTION TO WORK AND LET'S THE USER GO BACK TO LOGIN PAGE.
export const logout_user = async () => {
  await signOut(auth);
};

export const saveUserToFirestore = async (user: User) => {
  if (!user) return;

  const userRef = doc(db, 'users', user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    displayName: user.displayName || 'Unnamed',
    email: user.email,
  }, { merge: true });
};

/**
 ADDITIONAL CODE ||||| NEEDS EXPLAINING
 * Ensures chatId is the same regardless of who starts the chat.
 */
export function getChatId(uid1: string, uid2: string): string {
  return [uid1, uid2].sort().join('_');
}