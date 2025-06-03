import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF9A3D",
        tabBarInactiveTintColor: "#000",
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/home_menu.png")}
              style={{
                width: 32,
                height: 32,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/search_menu.png")}
              style={{
                width: 32,
                height: 32,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/order_menu.png")}
              style={{
                width: 32,
                height: 32,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/profile_menu.png")}
              style={{
                width: 32,
                height: 32,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
