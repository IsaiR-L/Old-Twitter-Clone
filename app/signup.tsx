import { Text, View, TextInput, Image, Pressable, Alert } from "react-native";
import { styles } from "/app/styles/signup_styles"; // Use the same styles as your login page
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signUp } from '/app/services/authServices';


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

      try {
    await signUp(email, password, username); // also saves to Firestore
    router.push("/"); // or goToHome() if defined
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    Alert.alert("Sign Up Failed", errorMessage);
  }
};

/*    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created successfully!");
      router.push("/"); // Navigate to the login page after successful sign-up
    } catch (error) {
      Alert.alert("Sign Up Failed", error.message);
    }
  };
*/
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
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput 
          style={styles.textinput} 
          placeholder="Username" 
          value={username} 
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.textinput}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Pressable style={styles.Button} onPress={handleSignUp}>
          <Text style={styles.text}> Sign Up </Text>
        </Pressable>
        <Text>
          Already have an account? 
          <Link href = {"/"} style={styles.link}> Log in </Link></Text>
      </View>
    </View>
  );
}

