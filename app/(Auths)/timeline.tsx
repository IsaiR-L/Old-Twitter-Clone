import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { logout_user } from "../../authService"; // adjust the path as needed
import { useAuth } from "../../context/AuthContext"; // adjust the path as needed
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";


export default function Timeline() {
    const router = useRouter();
    const { user, profile } = useAuth();

    const handleLogout = async () => {
        try {
            await logout_user();
            router.replace("/"); // goes back to index.tsx
        } catch (error: any) {
            alert("Logout Failed: " + error.message);
        }
    };
    
    return (
        <View style={{ backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome {profile?.username} to the Timeline!</Text>
            <Pressable onPress={handleLogout} style={{ marginTop: 20, padding: 10, backgroundColor: "#1DA1F2", borderRadius: 5 }}>
                <Text style={{ color: "white" }}>Logout</Text>
            </Pressable>
        </View>
    );
}