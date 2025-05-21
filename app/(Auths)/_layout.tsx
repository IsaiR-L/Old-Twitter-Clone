import React from "react";
import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "../../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { View, Image } from "react-native";

export default function AuthLayout() {
  return(
    <AuthProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1}}>
          <Tabs screenOptions={{ 
              //headerShown: false, 
              tabBarShowLabel: false, 
              tabBarStyle:{ 
                borderTopWidth: 1,
                height: 80,
                paddinfgBottom: 10, 
              },
              tabBarItemStyle: {
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 15,
              } 
            }}
            initialRouteName="timeline">
            <Tabs.Screen 
              name="timeline" 
              options={{
                headerLeft: () => (
                  <Image
                    source={require('/app/assets/images/profile_pic.png')}
                    style={{ width: 35, height: 35, marginLeft: 15, borderRadius: 20, marginVertical: 10 }}
                  />
                ),
                headerTitle: () => (
                  <View style={{ flex: 1, alignItems: "center", marginVertical: 10 }}>
                    <Ionicons name="logo-twitter" size={40} color="#1DA1F2"/>
                  </View>
                ),
                headerTitleAlign: "center",
                headerRight: () => null,//Need to add something here maybe settings? 
                //headerShown: false,
                tabBarIcon: ({ color, size } : { color: string, size: number }) => (
                  <Ionicons name="home-outline" color={color} size={size} />
                ),
                }}/>
            <Tabs.Screen 
              name="search_page" 
              options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size } : { color: string, size: number }) => (
                  <Ionicons name="search-outline" color={color} size={size} />
                ),
                }}/>
            <Tabs.Screen 
              name="notification_page" 
              options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size } : { color: string, size: number }) => (
                  <Ionicons name="notifications-outline" color={color} size={size} />
                ),
                }}/>
            <Tabs.Screen 
              name="message_page" 
              options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size } : { color: string, size: number }) => (
                  <Ionicons name="mail-outline" color={color} size={size} />
                ),
                }}/>
  
            <Tabs.Screen name="chat/[selectedUserId]" options={{ headerShown: false, href: null }}/>
            <Tabs.Screen name="chat/chat_layout" options={{ headerShown: false, href: null }}/>
          </Tabs>
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthProvider>
  );
}