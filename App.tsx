import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Itim_400Regular } from "@expo-google-fonts/itim";
import { LoginScreen } from "./screens/LoginScreen";
import { LoginForm } from "./screens/LoginForm";
import { RegisterForm } from "./screens/RegisterForm";
import { ChoiceProfile } from "./screens/ChoiceProfile";
import BottomTabs from "./navigation/BottomTabs";
import { ProfileScreen } from "./screens/ProfileScreen";
import { EditProfile } from "./screens/EditProfile";
import { PaymentMethodsScreen } from "./screens/PaymentMethodsScreen";

const Stack = createStackNavigator();

export default function App() {
  const font = useFonts({
    Itim: Itim_400Regular,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginForm"
          component={LoginForm}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterForm"
          component={RegisterForm}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ChoiceProfile"
          component={ChoiceProfile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={BottomTabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PaymentMethodsScreen"
          component={PaymentMethodsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
