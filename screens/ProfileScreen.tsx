import { View, Image, StyleSheet, Pressable } from "react-native"
import { AppText } from "../components/AppText"

export const ProfileScreen = ({ navigation }: any) => {
    return (
        <View> 
            <View style={styles.logoDiv}>
                <Image style={styles.logoImg} source={require("../assets/logo.png")} />
            </View>
            <View style={styles.line} />
            <View style={styles.profileInfoContainer}>
                <Image source={require("../assets/user_profile.png")} />
                <View style={styles.profileInfo}>
                    <AppText style={styles.nameText}>Nicolau Silva Silveira</AppText>
                    <AppText style={styles.addressText}>QS 07 - Taguatinga, Brasília - DF</AppText>
                    <Pressable onPress={() => navigation.navigate("EditProfile")} style={styles.editInfoButton}>
                        <AppText style={styles.editInfoButtonText}>EDITAR INFORMAÇÕES</AppText>
                    </Pressable>
                </View>
            </View>
            <View style={styles.line} />
            <View style={styles.optionsContainer}>
                <View>
                    <AppText style={styles.optionsText}>HISTÓRICO DE COMPRAS</AppText>
                    <View style={styles.line} />
                </View>
                <View>
                    <AppText style={[styles.optionsText, { marginTop: 20 }]}>CONFIGURAÇÃO DE NOTIF.</AppText>
                    <View style={styles.line} />
                </View>
                <View>
                    <AppText style={[styles.optionsText, { marginTop: 20 }]}>SOBRE ESTA VERSÃO</AppText>
                    <View style={styles.line} />
                </View>
                <View>
                    <AppText style={[styles.optionsText, { marginTop: 20 }]}>HISTÓRICO DE COMPRAS</AppText>
                    <View style={styles.line} />
                </View>
                <Pressable onPress={() => navigation.navigate("LoginScreen")}>
                    <AppText style={[styles.optionsText, { marginTop: 20, color: "#FF0000" }]}>FAZER LOGOUT</AppText>
                </Pressable>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    logoDiv: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    logoImg: {
        marginTop: 24,
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: "#000",
    },
    profileInfoContainer: {
        marginTop: 16,
        width: "80%",
        left: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 16
    },
    profileInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 85
    },
    nameText: {
        fontSize: 15,
        color: "#000"
    },
    addressText: {
        color: "#767676",
        fontSize: 15
    },
    editInfoButton: {
        width: 130,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    editInfoButtonText: {
        fontSize: 10,
    },
    optionsContainer: {
        marginTop: 48,
        width: "80%",
        left: "10%",
        display: "flex",
        flexDirection: "column"
    },
    optionsText: {
        fontSize: 24,
        marginBottom: 20
    }
})
