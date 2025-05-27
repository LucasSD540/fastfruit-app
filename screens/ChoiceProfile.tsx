import { View, Image, StyleSheet, Pressable } from "react-native"
import { AppText } from "../components/AppText";

export const ChoiceProfile = ({ navigation }: any) => {
    return (
        <View>
            <AppText style={styles.sectionText}>Escolha o perfil desejado</AppText>
            <View style={styles.twoProfilesDiv}>
                <View style={styles.profileDiv}>
                    <View style={styles.whiteProfileBallDiv}>
                        <Pressable onPress={() => navigation.navigate("")}>
                            <Image source={require("../assets/user_profile.png")} alt="" />
                        </Pressable>
                    </View>
                    <AppText style={styles.profileName}>Cliente</AppText>
                </View>
                <View style={styles.profileDiv}>
                    <View style={styles.whiteProfileBallDiv}>
                        <Pressable onPress={() => navigation.navigate("")}>
                            <Image source={require("../assets/user_profile.png")} alt="" />
                        </Pressable>
                    </View>
                    <AppText style={styles.profileName}>Entregador</AppText>
                </View>
            </View>
            <View style={styles.storeProfileDiv}>
                <View style={styles.profileDiv}>
                    <View style={styles.whiteProfileBallDiv}>
                        <Pressable onPress={() => navigation.navigate("")}>
                            <Image source={require("../assets/store_profile.png")} alt="" />
                        </Pressable>
                    </View>
                    <AppText style={styles.profileName}>Lojista</AppText>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionText: {
        fontSize: 20,
        marginTop: 148,
        marginLeft: 32,
        marginBottom: 48
    },
    whiteProfileBallDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        height: 121,
        width: 124,
        borderRadius: 100
    },
    profileName: {
        marginTop: 8,
        fontSize: 16
    },
    profileDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    twoProfilesDiv: {
        display: "flex",
        flexDirection: "row",
        gap: 27,
        justifyContent: "center"
    },
    storeProfileDiv: {
        marginTop: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    roundImageDiv: {
        height: 99,
        width: 104
    }
});
