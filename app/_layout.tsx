import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return(
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1}}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}}/>
        <Stack.Screen name="login" options={{ headerShown: false}}/>
        <Stack.Screen name="signup"/>
        <Stack.Screen name="timeline" options={{ headerShown: false}}/>
      </Stack>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}
