import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { logout_user } from "/app/services/authServices"; // adjust the path as needed
import { styles } from "/app/styles/timeline_styles"; // Use the same styles as your login page
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import NavBar from '../../components/NavBar';


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

    const goToMessage = () => {
        router.push("/message_page");
    }
    const goToSearch = () => {
        router.push("/search_page");
    }
    const goToNotification = () => {
        router.push("/notifications_page");
    }
    


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome to the Timeline</Text>
            <Pressable onPress={handleLogout} style={{ marginTop: 20, padding: 10, backgroundColor: "#1DA1F2", borderRadius: 5 }}>
                <Text style={{ color: "white" }}>Logout</Text>
            </Pressable>
            <Pressable onPress={goToMessage} style={{ marginTop: 20, padding: 10, backgroundColor: "#1DA1F2", borderRadius: 5 }}>
                <Text style={{ color: "white" }}>Message</Text>
            </Pressable>
        </View>
    );
}