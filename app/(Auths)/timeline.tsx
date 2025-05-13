import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { logout_user } from "/app/services/authServices"; // adjust the path as needed

export default function Timeline() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout_user();
            router.replace("/"); // goes back to index.tsx
        } catch (error) {
            alert("Logout Failed: " + error.message);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome to the Timeline</Text>
            <Pressable onPress={handleLogout} style={{ marginTop: 20, padding: 10, backgroundColor: "#1DA1F2", borderRadius: 5 }}>
                <Text style={{ color: "white" }}>Logout</Text>
            </Pressable>
        </View>
    );
}