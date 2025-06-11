import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import { AppText } from "../components/AppText";
import { useState } from "react";
import { supabase } from "../lib/supabase";

const { height } = Dimensions.get("screen");

export const LoginForm = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Erro no login", error.message);
    } else {
      navigation.navigate("ChoiceProfile");
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View>
          <Pressable onPress={() => navigation.navigate("LoginScreen")}>
            <Image
              style={styles.image}
              source={require("../assets/back_icon.png")}
            />
          </Pressable>
          <AppText style={styles.text}>Suas informações</AppText>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
          </View>
          <AppText style={styles.forgotText}>Esqueci minha senha</AppText>
        </View>
        <Pressable onPress={handleLogin} style={styles.button}>
          <AppText style={styles.buttonText}>Continuar</AppText>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginLeft: 24,
    marginTop: 48,
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
  forgotText: {
    color: "#1877F2",
    fontSize: 14,
    marginLeft: 24,
  },
  button: {
    position: "absolute",
    bottom: 56,
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
