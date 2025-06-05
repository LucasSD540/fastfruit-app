import { View, Image, StyleSheet, Pressable } from "react-native";
import { AppText } from "../components/AppText";

export const SelectProductScreen = ({ navigation }: any) => {
  return (
    <View>
      <View style={styles.logoDiv}>
        <Image style={styles.logoImg} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.line} />
      <Pressable onPress={() => navigation.navigate("HomeScreen")}>
        <Image
          style={styles.image}
          source={require("../assets/back_icon.png")}
        />
      </Pressable>
      <View style={styles.infoContainer}>
        <AppText style={styles.sectionTitle}>Brócolis</AppText>
        <View style={styles.productDiv}>
          <Pressable
            onPress={() => navigation.navigate("AddProductScreen")}
            style={styles.productImgBackground}
          >
            <Image source={require("../assets/brocolis_choice.png")} />
          </Pressable>
          <AppText style={styles.productName}>Brócolis Bandeja</AppText>
          <AppText style={styles.productPrice}>R$ 12,99</AppText>
        </View>
        <View style={styles.productDiv}>
          <Pressable
            onPress={() => navigation.navigate("AddProductScreen")}
            style={styles.productImgBackground}
          >
            <Image source={require("../assets/brocolis_choice.png")} />
          </Pressable>
          <AppText style={styles.productName}>Brócolis Bandeja</AppText>
          <AppText style={styles.productPrice}>R$ 12,99</AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  infoContainer: {
    alignItems: "center",
    marginTop: 52,
    width: "80%",
    left: "10%",
  },
  productDiv: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 48,
  },
  productImgBackground: {
    width: 86,
    height: 83,
    backgroundColor: "#fff",
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.25)",
  },
  productImg: {
    position: "absolute",
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 12,
  },
});
