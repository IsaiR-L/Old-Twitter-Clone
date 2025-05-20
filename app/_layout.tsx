// THIS INCLUDES THE IMPORTS THAT ARE NEEDED FOR THE INITIAL LOGIN PAGE.
import { Stack, useSegments, useRouter } from "expo-router"; 
import { useEffect, useState } from "react";
import { Auth, User, onAuthStateChanged} from "firebase/auth";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebase";

// 
export default function RootLayout() {
  const [initializing, setInitializing] = useState(true); // 
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const segments = useSegments();

// LISTENS FOR AUTH (USER) CHANGES. IF USER IS LOGIN/LOGOUT
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('onAuthStateChanged', user);
      setUser(user);  // STORES THE USERS INFO
      if (initializing) setInitializing(false); // IF THE USER IS LOGGED IN, 
    });

// UNSUBSCRIBE IS A CLEANUP FUNCTION THAT STOPS THE LISTENER WHEN THE COMPONENT UNMOUNTS
    return unsubscribe; 
  }, [initializing]);


// FIRST useEffect AUTHENTICATES THE USER AND IF PART OF THE AUTHENTICATED GROUP OF USERS
  useEffect(() => {
    if(initializing) return;
    const inAuthGroup = segments[0] == '(Auths)';
// IF PART OF THE AUTHENTICATED USERS -> HEAD TO TIMELINE PAGE (USER SUCCESSFULLY LOGGED IN)
    if (user && !inAuthGroup) {
      router.push('/(Auths)/timeline');
    } 
// IF NOT LOGGED IN -> WARNS USER THAT OF INCORRECT LOGIN AND STAY IN PAGE.
// UNLESS USER CREATES ANOTHER USER ACCOUNT (SIGNUP).
// ALSO STOPS ANY USER FROM ACCESSING PRIVATE PAGES AND OTHER USER ACCOUNTS.
    else if (!user && inAuthGroup) {
      router.replace('/')
    }
  }, [user, initializing]);

  if (initializing) return null;

  return(
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1}}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}}/>
        <Stack.Screen name="signup" options = {{headerShown: false}}/>
        <Stack.Screen name='(Auths)' options = {{headerShown: false}}/>
      </Stack>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}
