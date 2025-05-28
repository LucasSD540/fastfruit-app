import { View, Image, StyleSheet, useWindowDimensions } from "react-native"
import { Navbar } from "../components/Navbar"
import { AppText } from "../components/AppText"

export const HomeScreen = () => {
    const { height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.logoDiv}>
                <Image style={styles.logoImg} source={require("../assets/logo.png")} />
            </View>
            <View style={styles.line} />
            <View style={[styles.line, { top: height - 130 }]} />
            <Navbar />
        </View>
    )
}

const styles = StyleSheet.create({
    logoDiv: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    logoImg: {
        marginTop: 24
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: "#000"
    },
    navBar: {
        position: "absolute",
        bottom: 0,
    }
})
