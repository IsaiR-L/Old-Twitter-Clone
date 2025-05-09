/*import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "expo-router";
import { styles } from "/app/styles/login_styles.ts"; // Reuse existing styles


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
*/

import React from "react";
import { View, Text, Pressable, Alert, StyleSheet } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "expo-router";

export default function Timeline() {
  const router = useRouter();
  const auth = getAuth();

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
              if (!auth.currentUser) {
                Alert.alert("Error", "No user is currently signed in.");
                return;
              }

              await signOut(auth);
              router.replace("/index"); // Navigate to login
            } catch (error: any) {
              console.error("Logout Error:", error);
              Alert.alert("Error", error.message || "Failed to log out.");
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Timeline</Text>
      <Text style={styles.subtext}>Welcome back, tweep!</Text>
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1DA1F2", // Twitter Blue
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: "#657786", // Grayish Twitter text
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: "#1DA1F2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 2,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
