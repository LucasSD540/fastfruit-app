import { View, TouchableOpacity, ScrollView, Image, TextInput, StyleSheet, Dimensions } from "react-native"
import { AppText } from "../components/AppText"

const { height } = Dimensions.get('screen');

export const RegisterForm = ({ navigation }: any) => {
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                  <Image style={styles.image} source={require('../assets/back_icon.png')} />
                </TouchableOpacity>
                <AppText style={styles.text}>Suas informações</AppText>
                <View style={styles.container}>
                  <TextInput style={styles.input} placeholder="E-mail"></TextInput>
                  <TextInput style={styles.input} placeholder="CPF"></TextInput>
                  <TextInput style={styles.input} placeholder="Nome"></TextInput>
                  <TextInput style={styles.input} placeholder="Sobrenome"></TextInput>
                  <TextInput style={styles.input} placeholder="Senha"></TextInput>
                  <TextInput style={styles.input} placeholder="Confirmar senha"></TextInput>
                </View>
                <TouchableOpacity style={styles.button}>
                  <AppText style={styles.buttonText}>Cadastrar</AppText>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

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
  