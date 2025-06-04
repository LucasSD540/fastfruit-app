import { Pressable, View, StyleSheet, Image } from "react-native";
import { AppText } from "../components/AppText";

export const PaymentMethodsScreen = ({ navigation }: any) => {
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
      <View style={styles.methodsContainer}>
        <AppText style={styles.sectionTitle}>MÉTODOS DE PAGAMENTO</AppText>
        <View style={styles.methodDivContainer}>
          <View style={styles.methodDiv}>
            <Image source={require("../assets/pix_icon.png")} />
            <AppText style={styles.paymentName}>PIX</AppText>
          </View>
          <Pressable style={styles.paymentButton}>
            <AppText style={styles.buttonText}>Definir como principal</AppText>
          </Pressable>
        </View>
        <View style={styles.methodDivContainer}>
          <View style={styles.methodDiv}>
            <Image source={require("../assets/pix_icon.png")} />
            <AppText style={styles.paymentName}>PIX</AppText>
          </View>
          <Pressable style={styles.paymentButton}>
            <AppText style={styles.buttonText}>Definir como principal</AppText>
          </Pressable>
        </View>
        <View style={styles.methodDivContainer}>
          <View style={styles.methodDiv}>
            <Image source={require("../assets/pix_icon.png")} />
            <AppText style={styles.paymentName}>PIX</AppText>
          </View>
          <Pressable
            style={[styles.paymentButton, { backgroundColor: "#CCCCCC" }]}
          >
            <AppText style={styles.buttonText}>Definir como principal</AppText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  methodsContainer: {
    marginTop: 52,
    alignItems: "center",
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
  image: {
    position: "absolute",
    marginLeft: 24,
    marginTop: 48,
  },
  sectionTitle: {
    position: "absolute",
    fontSize: 24,
  },
  methodDivContainer: {
    width: "90%",
    marginTop: 64,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  methodDiv: {
    width: "100%",
    height: 80,
    padding: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.25)",
  },
  paymentName: {
    fontSize: 24,
    left: 8,
  },
  paymentButton: {
    width: 176,
    height: 37,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: "#FF9A3D",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});
