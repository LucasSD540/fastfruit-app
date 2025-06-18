import { View, Image, Pressable, StyleSheet, Text } from "react-native";
import { AppText } from "../components/AppText";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { addToCart } from "../redux/cartSlice";

type RootStackParamList = {
  AddProductScreen: { productId: string };
};

type AddProductScreenRouteProp = RouteProp<
  RootStackParamList,
  "AddProductScreen"
>;

export const AddProductScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const route = useRoute<AddProductScreenRouteProp>();
  const { productId } = route.params;

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === productId)
  );

  const [quantity, setQuantity] = useState(cartItem?.quantity || 1);

  if (!cartItem) return <Text>Produto não encontrado no carrinho</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.logoDiv}>
        <Image style={styles.logoImg} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.line} />
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={styles.image}
          source={require("../assets/back_icon.png")}
        />
      </Pressable>
      <View style={styles.productInfoContainer}>
        <AppText style={styles.sectionTitle}>{cartItem.name}</AppText>
      </View>
      <View style={styles.productInfoContainer}>
        <View style={styles.productImgBackground}>
          <Image
            style={{ width: 120, height: 120 }}
            source={{ uri: cartItem.image }}
          />
        </View>
        <AppText style={styles.productName}>Quantidade: {quantity}</AppText>
        <AppText style={styles.productInfo}>
          Preço unitário: R$ {cartItem.price.toFixed(2)}
        </AppText>
        <AppText style={[styles.productInfo, { color: "#FF9A3D" }]}>
          Total: R$ {(cartItem.price * quantity).toFixed(2)}
        </AppText>
        <View style={styles.btnContainer}>
          <View style={styles.quantityButton}>
            <Pressable onPress={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}>
              <Text style={styles.quantityText}>-</Text>
            </Pressable>

            <Text style={[styles.quantityText, { marginHorizontal: 20 }]}>
              {quantity}
            </Text>

            <Pressable onPress={() => setQuantity((q) => q + 1)}>
              <Text style={styles.quantityText}>+</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => {
              dispatch(
                addToCart({
                  id: cartItem.id,
                  name: cartItem.name,
                  image: cartItem.image,
                  price: cartItem.price,
                  quantity: quantity,
                })
              );
              navigation.navigate("CartScreen");
            }}
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
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 5,
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
