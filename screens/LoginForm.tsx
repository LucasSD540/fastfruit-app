import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AppText } from "../components/AppText";

export const LoginForm = ({ navigation }: any) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Image
          style={styles.image}
          source={require("../assets/back_icon.png")}
        />
      </TouchableOpacity>
      <AppText style={styles.text}>Suas informações</AppText>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="E-mail"></TextInput>
        <TextInput style={styles.input} placeholder="Senha"></TextInput>
      </View>
      <AppText style={styles.forgotText}>Esqueci minha senha</AppText>
      <TouchableOpacity style={styles.button}>
        <AppText style={styles.buttonText}>Continuar</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 24,
  },
  text: {
    fontSize: 20,
    marginLeft: 24,
    marginTop: 48,
  },
  input: {
    width: "90%",
    height: 45,
    borderColor: "#00000047",
    borderWidth: 1,
    marginVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  placeholderText: {
    color: "#00000047",
    fontSize: 15,
  },
  forgotText: {
    color: "#1877F2",
    fontSize: 14,
    marginLeft: 24,
  },
  button: {
    marginTop: 440,
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
});
