import {
  View,
  Pressable,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { AppText } from "../components/AppText";
import { useState } from "react";
import { supabase } from "../lib/supabase";

const { height } = Dimensions.get("screen");

export const RegisterForm = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          surname,
          cpf,
        },
      },
    });

    if (error) {
      Alert.alert("Erro no cadastro", error.message);
    } else {
      Alert.alert(
        "Cadastro feito!",
        "Confira seu e-mail para verificar a conta"
      );
      navigation.navigate("LoginForm");
    }
    setLoading(false);
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
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
            placeholder="CPF"
            onChangeText={setCpf}
            value={cpf}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            onChangeText={setSurname}
            value={surname}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry
          />
        </View>
        <Pressable onPress={handleRegister} style={styles.button}>
          {loading ? (
            <AppText style={styles.buttonText}>Carregando...</AppText>
          ) : (
            <AppText style={styles.buttonText}>Cadastrar</AppText>
          )}
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
