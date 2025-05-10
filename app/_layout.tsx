import { Stack, useSegments, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Auth, User, onAuthStateChanged} from "firebase/auth";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebase";

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('onAuthStateChanged', user);
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, [initializing]);

  useEffect(() => {
    if(initializing) return;

    const inAuthGroup = segments[0] == '(Auths)';

    if (user && !inAuthGroup) {
      router.push('/(Auths)/timeline');
    } else if (!user && inAuthGroup) {
      router.replace('/')
    }
  }, [user, initializing]);

  if (initializing) return null;

  return(
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1}}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}}/>
        <Stack.Screen name="signup"/>
        <Stack.Screen name="(Auths)/timeline" options={{ headerShown: false}}/>
      </Stack>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}
