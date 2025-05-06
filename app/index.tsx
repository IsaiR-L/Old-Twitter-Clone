import { Text, View, TextInput, Image, Pressable } from "react-native";
import { styles } from "/app/styles/login.styles";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { login_user } from '/app/authService';
import { FirestoreError } from "firebase/firestore";

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await login_user(email, password);
            //goToHome();
            } catch (error: any) {
                const err = error as FirestoreError

                alert('Login Failed: ' + err.message);
            }
    };

    const goToHome = () => {
        router.push("/timeline");
    }

    const goToSignUp = () => {
        router.push("/signup")
    }

    return (
        <View style={styles.container}>
            <View style={styles.input}>  
                <Image 
                source={require('/app/assets/images/log-twitter-bird.png')}
                style={styles.logo}
                />
                <TextInput style={styles.textinput} placeholder="Email" value={email} onChangeText={setEmail} />
                <TextInput style={styles.textinput} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
                <Pressable style={styles.Button} onPress={ () => { handleLogin(); }}>
                    <Text style={styles.text}> Login </Text>
                </Pressable>
                <Text>
                    Don't have a account? 
                    <Link href={"/signup"} style={styles.link}>Sign Up</Link></Text> 
          </View> 
        </View>
    )
}