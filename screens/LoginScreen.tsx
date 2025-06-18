import {
  View,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import { AppText } from "../components/AppText";

const { height } = Dimensions.get("screen");

export const LoginScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("../assets/banner.png")} style={styles.banner} />
        <Pressable
          style={styles.button1}
          onPress={() => navigation.navigate("LoginForm")}
        >
          <AppText style={styles.buttonText}>Já tenho uma conta</AppText>
        </Pressable>
        <Pressable
          style={styles.button2}
          onPress={() => navigation.navigate("RegisterForm")}
        >
          <AppText style={styles.buttonText}>Criar nova conta</AppText>
        </Pressable>
        <AppText style={styles.accessText}>Acessar com</AppText>
        <View style={styles.flexImageView}>
          <Image source={require("../assets/facebook_logo.png")} />
          <Image source={require("../assets/google_logo.png")} />
        </View>
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <AppText style={styles.visitorText}>Continuar como visitante</AppText>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
  },
  banner: {
    width: "100%",
    height: 480,
  },
  button1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 49,
    backgroundColor: "#4C9F70",
    marginLeft: "5%",
    borderRadius: 10,
    margin: 24,
  },
  button2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 49,
    backgroundColor: "#FF9A3D",
    marginLeft: "5%",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  accessText: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 15,
  },
  flexImageView: {
    marginTop: 16,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
  },
  visitorText: {
    marginTop: 20,
    textAlign: "center",
    color: "#FF9A3D",
    fontSize: 18,
  },
});
