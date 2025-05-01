import { Text, View, TextInput, Image, Pressable, Linking, TouchableOpacity, Alert } from "react-native";
import { styles } from "/app/styles/login.styles";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { login_user } from '/app/authService';
import timeline from "./timeline";

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await login_user(email, password);
        }   catch (error) {
            if (error instanceof Error){
                Alert.alert("Error: ", error.message)
            } else {
                console.error("UNKNOWN-ERR", error);
            }
        }
    };

    const goToHome = () => {
        router.push("/timeline");
    }

    return (
        <View style={styles.container}>
            <View style={styles.input}>  
                <Image 
                source={require('/app/assets/images/log-twitter-bird.png')}
                style={styles.logo}
                />
                <TextInput style={styles.textinput} placeholder="Username" value={email} onChangeText={setEmail} />
                <TextInput style={styles.textinput} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
                <Pressable style={styles.Button} onPress={ () => { handleLogin(); goToHome(); }}>
                    <Text style={styles.text}> Login </Text>
                </Pressable>
                <Text> Don't have a account? <Link href={"/signup"} style={styles.link}>Sign up</Link></Text> 
          </View> 
        </View>
    )
}