import { useEffect, useState } from "react";
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { AppText } from "../components/AppText";
import { supabase } from "../lib/supabase";

export const AddressScreen = ({ navigation }: any) => {
  const [endereco, setEndereco] = useState("Carregando endereço...");

  const [subtotal, setSubtotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const serviceFee = 1.5;

  useEffect(() => {
    const fetchUserData = async () => {
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
        .select("endereco")
        .eq("id", user.id)
        .single();

      if (error || !data) {
        setEndereco("Endereço não cadastrado");
      } else {
        setEndereco(data.endereco || "Endereço não cadastrado");
      }
    };

    const fetchCartItems = async () => {
      const { data, error } = await supabase.from("cart").select("*");

      if (!error && data) {
        const totalQtd = data.reduce((acc, item) => acc + item.quantity, 0);
        const subtotalValor = data.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        setTotalQuantity(totalQtd);
        setSubtotal(subtotalValor);
      }
    };

    fetchUserData();
    fetchCartItems();
  }, []);

  const total = subtotal + serviceFee;

  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.sectionTitleContainer}>
        <AppText style={styles.sectionTitle}>MEU CARRINHO</AppText>
      </View>

      <AppText style={{ left: "10%", marginTop: 16, fontWeight: "bold" }}>
        Endereço
      </AppText>

      <View style={styles.itemContainer}>
        <View style={styles.productDiv}>
          <Image
            style={styles.productImage}
            source={require("../assets/loc.png")}
          />
          <View>
            <AppText
              style={[
                styles.smallText,
                { fontWeight: "bold", fontSize: 9, width: 140 },
              ]}
            >
              {endereco}
            </AppText>
          </View>
        </View>
        <View style={{ right: "10%" }}>
          <Pressable style={styles.quantityButton}>
            <AppText style={{ color: "#FF9A3D", fontSize: 12 }}>Trocar</AppText>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 200 }}>
        <AppText style={{ left: "10%", fontSize: 15, fontWeight: "bold" }}>
          Resumo
        </AppText>

        <View style={styles.row}>
          <AppText>Subtotal</AppText>
          <AppText>R$ {subtotal.toFixed(2)}</AppText>
        </View>
        <View style={styles.row}>
          <AppText>Taxa de entrega</AppText>
          <AppText>grátis</AppText>
        </View>
        <View style={styles.row}>
          <AppText>Taxa de serviço</AppText>
          <AppText>R$ {serviceFee.toFixed(2)}</AppText>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <AppText style={{ fontWeight: "bold" }}>TOTAL</AppText>
        <AppText style={{ fontWeight: "bold" }}>R$ {total.toFixed(2)}</AppText>
      </View>

      <View>
        <Pressable
          onPress={() => navigation.navigate("PaymentScreen")}
          style={styles.button}
        >
          <AppText style={styles.buttonText}>Continuar</AppText>
        </Pressable>
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
  image: {
    position: "absolute",
    marginLeft: 24,
    marginTop: 48,
  },
  sectionTitle: {
    position: "absolute",
    fontSize: 24,
  },
  sectionTitleContainer: {
    width: "80%",
    height: 45,
    left: "10%",
    alignItems: "center",
    marginTop: 52,
    borderBottomWidth: 1,
  },
  button: {
    position: "absolute",
    bottom: -80,
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
  infoBarContainer: {
    marginTop: 32,
    width: "80%",
    height: 30,
    left: "10%",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 4,
  },
  infoBarText: {
    fontSize: 13,
  },
  productDiv: {
    paddingLeft: 10,
    marginTop: 32,
    width: 56,
    height: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    left: "10%",
    flexDirection: "row",
    gap: 32,
  },
  productImage: {
    width: "70%",
    height: "70%",
  },
  quantityButton: {
    flexDirection: "row",
    width: 60,
    height: 25,
    backgroundColor: "#fff",
    boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.25)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    top: 16,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallText: {
    fontSize: 8,
  },
  infoTextContainer: {
    width: 80,
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    left: "10%",
    width: "80%",
    justifyContent: "space-between",
  },
  totalContainer: {
    marginTop: 16,
    left: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    borderWidth: 1,
    borderRadius: 30,
    padding: 8,
  },
});
