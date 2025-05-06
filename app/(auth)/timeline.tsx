import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "expo-router";
import { styles } from "/app/styles/login.styles"; // Reuse existing styles


export default function Timeline() {
  const router = useRouter();
  const auth = getAuth(); // Ensure Firebase is initialized before this is called

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: async () => {
            try {
              await signOut(auth);
              router.push("../"); // Adjust path to your login screen if needed
            } catch (error: any) {
              Alert.alert("Error", error.message);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to your timeline!</Text>
      <Pressable style={styles.Button} onPress={handleLogout}>
        <Text style={styles.text}>Log Out</Text>
      </Pressable>
    </View>
  );
}
