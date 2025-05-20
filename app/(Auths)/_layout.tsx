import React from "react";
import { Stack, useSegments, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "../../context/AuthContext";

export default function AuthLayout() {
  return(
    <AuthProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1}}>
          <Stack>
            <Stack.Screen name="timeline" options={{ headerShown: false}}/>
            <Stack.Screen name="search_page" options={{ headerShown: false}}/>
            <Stack.Screen name="notification_page" options={{ headerShown: false}}/>
            <Stack.Screen name="message_page" options={{ headerShown: false}}/>
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthProvider>
  );
}