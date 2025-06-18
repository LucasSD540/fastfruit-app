import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { AppText } from "../components/AppText";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

type Product = {
  id: string;
  productName: string;
  productImgUrl: string;
  price: number;
};

type RootStackParamList = {
  SelectProductScreen: { productId: number };
};

type SelectProductScreenRouteProp = RouteProp<
  RootStackParamList,
  "SelectProductScreen"
>;

export const SelectProductScreen = ({ navigation }: any) => {
  const route = useRoute<SelectProductScreenRouteProp>();
  const { productId } = route.params;

  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .eq("id", productId)
        .single();

      if (error) {
        console.error("Erro ao buscar produto:", error);
      } else {
        setProduct(data as Product);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.productName,
          image: product.productImgUrl,
          price: product.price,
          quantity: 1,
        })
      );
      navigation.navigate("AddProductScreen", { productId: product.id });
    }
  };

  if (!product) return <Text>Carregando...</Text>;

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
        <AppText style={styles.sectionTitle}>{product.productName}</AppText>
        <View style={styles.productDiv}>
          <Pressable
            onPress={handleAddToCart}
            style={styles.productImgBackground}
          >
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: product.productImgUrl }}
            />
          </Pressable>
          <AppText style={styles.productName}>{product.productName}</AppText>
          <AppText style={styles.productPrice}>
            R$ {product.price.toFixed(2)}
          </AppText>
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
