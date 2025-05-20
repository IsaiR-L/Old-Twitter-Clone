import { Text, View, TextInput, Image, Pressable } from "react-native";
import { styles } from "/app/styles/login_styles";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { login_user } from '/app/services/authServices';
import { FirestoreError } from "firebase/firestore";

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
// handleLogin CHECKS IF THE USER IS A FIRESTORE USER (FIRESTORE DATABASE)
    const handleLogin = async () => {
        try {
            await login_user(email, password);
            } catch (error: any) {
                const err = error as FirestoreError

                alert('Login Failed: ' + err.message);
            }
    };
// USER AUTHENTICATED, THEN "Login" BUTTON SHOULD ALLOW USER TO GO TO "timeline" PAGE;
    const goToHome = () => {
        router.push("/timeline");
    }
// IF NOT A USER, THE APP ROUTES THE USER TO THE "signup" PAGE.
    const goToSignUp = () => {
        router.push("/signup")
    }
// THIS CREATES THE PAGE SETUP OF THR INITIAL PAGE (index).
    return (
        <View style={styles.container}>
            <View style={styles.input}>  
                <Image 
                source={require('/app/assets/images/log-twitter-bird.png')}
                style={styles.logo}
                />
                <TextInput 
                    style={styles.textinput} 
                    placeholder="Email" 
                    value={email} 
                    onChangeText={setEmail} />
                <TextInput 
                    style={styles.textinput}
                    placeholder="Password" 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry />
                <Pressable style={styles.Button} onPress={ () => { handleLogin(); }}>
                    <Text style={styles.text}> Login </Text>
                </Pressable>
                <Text>
                    Don't have a account? 
                    <Link href={"/signup"} style={styles.link}> Sign Up</Link></Text> 
          </View> 
        </View>
    )
}