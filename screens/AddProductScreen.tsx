import { View, Image, Pressable, StyleSheet, Text } from "react-native";
import { AppText } from "../components/AppText";

export const AddProductScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoDiv}>
        <Image style={styles.logoImg} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.line} />
      <Pressable onPress={() => navigation.navigate("SelectProductScreen")}>
        <Image
          style={styles.image}
          source={require("../assets/back_icon.png")}
        />
      </Pressable>
      <View style={styles.productInfoContainer}>
        <AppText style={styles.sectionTitle}>Brócolis Bandeja</AppText>
      </View>
      <View style={styles.productInfoContainer}>
        <View style={styles.productImgBackground}>
          <Image source={require("../assets/brocolis_big.png")} />
        </View>
        <AppText style={styles.productName}>Aproximadamente 250 gramas</AppText>
        <AppText style={styles.productInfo}>Por: R$ 51,96 / kg</AppText>
        <AppText style={[styles.productInfo, { color: "#FF9A3D" }]}>
          R$ 12,99
        </AppText>
        <AppText style={styles.productInfo}>0,250 / kg</AppText>
        <View style={styles.btnContainer}>
          <Pressable style={styles.quantityButton}>
            <Text style={{ fontSize: 16 }}>-</Text>
            <Text>1</Text>
            <Text style={{ fontSize: 16 }}>+</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("CartScreen")}
            style={styles.addButton}
          >
            <Image source={require("../assets/add_icon.png")} />
            <AppText style={styles.addText}>Adicionar</AppText>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: "100%",
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
  productInfoContainer: {
    width: "80%",
    left: "10%",
    alignItems: "center",
    marginTop: 52,
  },
  sectionTitle: {
    position: "absolute",
    fontSize: 24,
  },
  productContainer: {
    marginTop: 48,
  },
  productImgBackground: {
    width: "80%",
    height: 249,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  productName: {
    fontSize: 14,
  },
  productInfo: {
    fontSize: 12,
  },
  btnContainer: {
    position: "absolute",
    bottom: -230,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  quantityButton: {
    flexDirection: "row",
    width: 150,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  addButton: {
    flexDirection: "row",
    width: 150,
    height: 40,
    backgroundColor: "#FF9A3D",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  addText: {
    color: "#fff",
    fontSize: 16,
  },
});
