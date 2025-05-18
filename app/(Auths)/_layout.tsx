import React from "react";
import { Stack, useSegments, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return(
    <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1}}>
          <Stack>
            <Stack.Screen name="timeline" options={{ headerShown: false}}/>
            <Stack.Screen name="search" options={{ headerShown: false}}/>
            <Stack.Screen name="notifications" options={{ headerShown: false}}/>
            <Stack.Screen name="message" options={{ headerShown: false}}/>
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}