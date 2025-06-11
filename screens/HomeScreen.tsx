import { View, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { AppText } from "../components/AppText";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

type Product = {
  id: number;
  created_at: string;
  productName: string;
  productImgUrl: string;
  price: number;
};

type Store = {
  id: number;
  storeImgUrl: string;
  storeName: string;
};

export const HomeScreen = ({ navigation }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Erro ao buscar produtos:", error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    };

    const fetchStores = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("store")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Erro ao buscar lojas:", error);
      } else {
        setStores(data || []);
      }
      setLoading(false);
    };

    fetchProducts();
    fetchStores();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoDiv}>
        <Image style={styles.logoImg} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.line} />
      <View style={styles.infoContainer}>
        <AppText style={styles.adressInfoText}>
          QS 7 - Taguatinga, Brasília - DF
        </AppText>
        <View style={styles.notificationDiv}>
          <Image source={require("../assets/notification.png")} />
        </View>
        <AppText style={styles.sectionTile}>Mais comprados</AppText>
        <View style={styles.productContainer}>
          {loading ? (
            <AppText>Carregando produtos...</AppText>
          ) : (
            products.map((product) => (
              <Pressable
                key={product.id}
                onPress={() =>
                  navigation.navigate("SelectProductScreen", {
                    productId: product.id,
                  })
                }
                style={styles.productDiv}
              >
                <Image
                  style={styles.productImage}
                  source={{ uri: product.productImgUrl }}
                  resizeMode="contain"
                />
                <AppText style={styles.productName}>
                  {product.productName}
                </AppText>
              </Pressable>
            ))
          )}
        </View>
        <AppText style={styles.sectionTile}>Últimas lojas</AppText>
        <View style={styles.productLastStoreContainer}>
          {loading ? (
            <AppText>Carregando...</AppText>
          ) : (
            stores.map((store) => (
              <View key={store.id} style={styles.productDivLastStore}>
                <Image
                  style={styles.productImage}
                  source={{ uri: store.storeImgUrl }}
                />
                <AppText style={styles.productName}>{store.storeName}</AppText>
              </View>
            ))
          )}
        </View>
        <AppText style={styles.sectionTile}>Meus favoritos</AppText>
        <View style={styles.productLastStoreContainer}>
          {loading ? (
            <AppText>Carregando...</AppText>
          ) : (
            stores.map((store) => (
              <View key={store.id} style={styles.productDivFavorites}>
                <Image
                  style={styles.productImage}
                  source={{ uri: store.storeImgUrl }}
                />
              </View>
            ))
          )}
        </View>
        <AppText style={styles.sectionTile}>Lojas</AppText>
        <View style={styles.productStoreContainer}>
          {loading ? (
            <AppText>Carregando...</AppText>
          ) : (
            stores.map((store) => (
              <View key={store.id} style={styles.flexStoreContainer}>
                <View style={styles.productDivFavorites}>
                  <Image
                    style={styles.productImage}
                    source={{ uri: store.storeImgUrl }}
                  />
                </View>
                <View style={styles.flexNameDiv}>
                  <AppText style={styles.storeName}>{store.storeName}</AppText>
                  <Image
                    style={styles.favoriteImage}
                    source={require("../assets/favorite_icon.png")}
                  />
                </View>
              </View>
            ))
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  notificationDiv: {
    position: "absolute",
    right: 0,
    top: 24,
    width: 28,
    height: 28,
    backgroundColor: "#fff",
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.25)",
  },
  infoContainer: {
    width: "80%",
    left: "10%",
  },
  adressInfoText: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 32,
  },
  sectionTile: {
    fontSize: 20,
    marginTop: 16,
  },
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productLastStoreContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
  productStoreContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginTop: 16,
  },
  flexStoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  productDiv: {
    width: "23%",
    height: 64,
    borderRadius: 20,
    backgroundColor: "#fff",
    boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productDivLastStore: {
    width: "25%",
    height: 100,
    borderRadius: 20,
    backgroundColor: "#fff",
    boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productDivFavorites: {
    width: 80,
    height: 80,
    borderRadius: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  productName: {
    fontSize: 10,
  },
  productImage: {
    width: "70%",
    height: "70%",
  },
  storeName: {
    marginLeft: 8,
    fontSize: 18,
  },
  flexNameDiv: {
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteImage: {
    position: "absolute",
    left: "120%",
  },
});
