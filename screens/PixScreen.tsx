import {
  View,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { AppText } from "../components/AppText";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const PixScreen = ({ navigation }: any) => {
  const [subtotal, setSubtotal] = useState(0);
  const serviceFee = 1.5;
  const total = subtotal + serviceFee;

  useEffect(() => {
    const fetchCartData = async () => {
      const { data, error } = await supabase.from("cart").select("*");

      if (error || !data) {
        Alert.alert("Erro", "Erro ao carregar o carrinho");
        return;
      }

      const subtotalValue = data.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      setSubtotal(subtotalValue);
    };

    fetchCartData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoDiv}>
        <Image style={styles.logoImg} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.line} />
      <View style={styles.sectionTitleContainer}>
        <AppText style={styles.sectionTitle}>PAGAMENTO</AppText>
      </View>
      <Pressable onPress={() => navigation.navigate("HomeScreen")}>
        <Image
          style={{ left: "15%", width: "70%", height: 280, marginTop: 24 }}
          source={require("../assets/qr_code.png")}
        />
      </Pressable>
      <View
        style={{
          marginTop: 24,
          left: "10%",
          width: "80%",
          borderRadius: 10,
          padding: 10,
          backgroundColor: "#f2f2f2",
        }}
      >
        <AppText>Pix copia e cola:</AppText>
        <AppText>
          00020126330014BR.GOV.BCB.PIX0114+5581999999999520400005303986540540.005802BR5920Nome
          do Recebedor6009SBrasilia 62140510IDENTIFICADOR6304A1B2
        </AppText>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <AppText style={{ color: "#800080" }}>1:00</AppText>
          <View
            style={{
              borderRadius: 10,
              width: 70,
              height: 35,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <Image source={require("../assets/page_icon.png")} />
            <AppText>Copiar</AppText>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 24 }}>
        <AppText style={{ left: "10%", fontSize: 15, fontWeight: "bold" }}>
          Resumo
        </AppText>
        <View style={styles.summaryRow}>
          <AppText>Subtotal</AppText>
          <AppText>R$ {subtotal.toFixed(2)}</AppText>
        </View>
        <View style={styles.summaryRow}>
          <AppText>Taxa de entrega</AppText>
          <AppText>grátis</AppText>
        </View>
        <View style={styles.summaryRow}>
          <AppText>Taxa de serviço</AppText>
          <AppText>R$ {serviceFee.toFixed(2)}</AppText>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <AppText style={{ fontWeight: "bold" }}>TOTAL</AppText>
        <AppText style={{ fontWeight: "bold" }}>R$ {total.toFixed(2)}</AppText>
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
  summaryRow: {
    flexDirection: "row",
    left: "10%",
    width: "80%",
    justifyContent: "space-between",
  },

  totalContainer: {
    marginTop: 16,
    marginBottom: 16,
    left: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    borderWidth: 1,
    borderRadius: 30,
    padding: 8,
  },
});
