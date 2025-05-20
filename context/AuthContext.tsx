// context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";

type UserProfile = {
  name: string;
  email: string;
  role?: string;
  username: string;
};

type AuthContextType = {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  updateProfile: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribeAuth;
  }, []);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      return;
    }

    const unsubscribeProfile = onSnapshot(doc(db, "users", user.uid), (docSnap) => {
      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile);
      }
    });

    return unsubscribeProfile;
  }, [user]);

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) return;
    const profileRef = doc(db, "users", user.uid);
    await updateDoc(profileRef, data);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);