import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AppText } from "../components/AppText";

export const LoginScreen = ({ navigation }: any) => {
  return (
    <View>
      <Image source={require("../assets/banner.png")} style={styles.banner} />
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("LoginForm")}
      >
        <AppText style={styles.buttonText}>Já tenho uma conta</AppText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <AppText style={styles.buttonText}>Criar nova conta</AppText>
      </TouchableOpacity>
      <AppText style={styles.accessText}>Acessar com</AppText>
      <View style={styles.flexImageView}>
        <Image source={require("../assets/facebook_logo.png")} />
        <Image source={require("../assets/google_logo.png")} />
      </View>
      <AppText style={styles.visitorText}>Continuar como visitante</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 560,
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
