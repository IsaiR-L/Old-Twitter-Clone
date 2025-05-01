import { Text, View, TextInput, Image, Pressable, Linking, TouchableOpacity } from "react-native";
import { styles } from "/app/styles/login.styles";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.input}>  
                <Image 
                source={require('/app/assets/images/log-twitter-bird.png')}
                style={styles.logo}
                />
                <TextInput style={styles.textinput} placeholder="Username" />
                <TextInput style={styles.textinput} placeholder="Password" />
                <Pressable style={styles.Button} onPress={() => Linking.openURL('http://google.com')}>
                    <Text style={styles.text}> Login </Text>
                </Pressable>
                <Text> Don't have a account? <Link href={"/signup"} style={styles.link}>Sign up</Link></Text> 
          </View> 
        </View>
    )
}