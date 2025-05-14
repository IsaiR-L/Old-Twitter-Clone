import { Text, View, TextInput, Image, Pressable } from "react-native";
import { styles } from "/app/styles/signup.styles";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { signUp } from '/app/authService';
import { FirestoreError } from "firebase/firestore";

export default function signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await signUp(email, password);
        goToHome();
      } catch (error: any) {
        const err = error as FirestoreError
        alert('Login Failed: ' + err.message);
      }
  };

  const goToHome = () => {
      router.push("/");
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>  
          <Image 
          source={require('/app/assets/images/log-twitter-bird.png')}
          style={styles.logo}
          />
          <Text style={styles.Titletext}>Create Your Account</Text>
          <TextInput style={styles.textinput} placeholder="Username" value={username} onChangeText={setUsername} />
          <TextInput style={styles.textinput} placeholder="Email" value={email} onChangeText={setEmail} />
          <TextInput style={styles.textinput} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
          <Pressable style={styles.Button} onPress={ () => { handleSignup(); }}>
              <Text style={styles.text}> Sign Up </Text>
          </Pressable>
      </View> 
    </View>
  )
}