import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#FFFFFF",
    },
    Titletext: {
        fontSize: 30,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: '100%',
        marginTop: 150,
    },
    title: {
        color: "blue",
        fontSize: 50,
    },
    textinput: {
        height: 50,
        width: "100%",
        maxWidth: 300,
        marginBottom: 10,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    logo: {
        height: 80,
        width: 80,
        marginBottom: 10
    },
    link: {
        color: "blue",
    },
    Button: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#1DA1F2",
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginBottom: 20,
        width: "100%",
        maxWidth: 300,
        shadowOffset:{
            height: 4,
            width: 0,
        },
        borderRadius: 14,
        shadowOpacity: 0.15,
        shadowRadius: 12,
        alignItems: "center",
        elevation: 5,
    },
    text: {
        fontSize: 15,
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold",
    }
});