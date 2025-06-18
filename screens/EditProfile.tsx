import {
  Image,
  Pressable,
  View,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { AppText } from "../components/AppText";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const EditProfile = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        Alert.alert("Erro", "Usuário não autenticado");
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error || !data) {
        Alert.alert("Erro", "Erro ao carregar perfil");
      } else {
        setName(data.name || "");
        setSurname(data.surname || "");
        setCep(data.cep || "");
        setEndereco(data.endereco || "");
        setComplemento(data.complemento || "");
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdate = async () => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      Alert.alert("Erro", "Usuário não autenticado");
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        name,
        surname,
        cep,
        endereco,
        complemento,
      })
      .eq("id", user.id);

    if (error) {
      Alert.alert("Erro", "Não foi possível atualizar os dados.");
    } else {
      Alert.alert("Sucesso", "Dados atualizados com sucesso!");
      navigation.navigate("ProfileScreen");
    }
  };

  return (
    <View>
      <View style={styles.logoDiv}>
        <Image style={styles.logoImg} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.line} />
      <Pressable onPress={() => navigation.navigate("ProfileScreen")}>
        <Image
          style={styles.image}
          source={require("../assets/back_icon.png")}
        />
      </Pressable>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.cameraImg}
            source={require("../assets/camera.png")}
          />
          <Image
            style={styles.userImg}
            source={require("../assets/user_profile.png")}
          />
          <View style={styles.userImgDark} />
        </View>
        <AppText style={styles.sectionTitle}>Alterar foto de perfil</AppText>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={cep}
          onChangeText={setCep}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.input}
          placeholder="Complemento"
          value={complemento}
          onChangeText={setComplemento}
        />
        <Pressable onPress={handleUpdate} style={styles.button}>
          <AppText style={styles.buttonText}>Atualizar informações</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    left: "5%",
    marginTop: 32,
  },
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
  userImg: {
    width: 104,
    height: 99,
  },
  userImgDark: {
    position: "absolute",
    width: 104,
    height: 104,
    backgroundColor: "rgba(0,0,0, .25)",
    borderRadius: "100%",
  },
  cameraImg: {
    position: "absolute",
    top: 30,
    left: 32,
    zIndex: 10,
  },
  image: {
    position: "absolute",
    left: "5%",
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#00000047",
    borderWidth: 1,
    marginVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 49,
    backgroundColor: "#FF9A3D",
    borderRadius: 10,
    marginTop: 32,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
