import { View, Image, StyleSheet, useWindowDimensions } from "react-native"
import { AppText } from "./AppText"

export const Navbar = () => {
    const { height } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <View style={styles.menuItemDiv}>
                <Image source={require("../assets/home_menu.png")} />
                <AppText style={styles.menuItemText}>Início</AppText>
            </View>
            <View style={styles.menuItemDiv}>
                <Image source={require("../assets/search_menu.png")} />
                <AppText style={styles.menuItemText}>Buscar</AppText>
            </View>
            <View style={styles.menuItemDiv}>
                <Image source={require("../assets/order_menu.png")} />
                <AppText style={styles.menuItemText}>Pedidos</AppText>
            </View>
            <View style={styles.menuItemDiv}>
                <Image source={require("../assets/profile_menu.png")} />
                <AppText style={styles.menuItemText}>Perfil</AppText>
            </View>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginLeft: "10%",
        height: 48,
        position: "absolute",
        bottom: 48
    },
    menuItemDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    menuItemText: {
        fontSize: 14,
    }
});
