/*import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CardRdv from "./components/CardRdv/CardRdv";
import { Header } from "./components/Header/Header";
import { CardList } from "./components/CardList/CardList";
import { ProfilDoctor } from "./components/ProfilDoctor/ProfilDoctor";
import Sary from "./assets/fond.jpg";
import { s } from "./components/CardDoctor/CardDoctor.style";
import Display from "./screens/Display";

export default function App() {
  return (
    <ImageBackground source={Sary} style={s.form}>
      <SafeAreaProvider>
        <SafeAreaView style={s.form}>
          <Display />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}*/
import { CardDoctor } from "./components/CardDoctor/CardDoctor";
import { s } from "./components/CardDoctor/CardDoctor.style";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginDoctorScreen from "./screens/LoginDoctorScreen";
import LoginPatientScreen from "./screens/LoginPatientScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegisterScreen}
        ></Stack.Screen>
        <Stack.Screen name="LoginDoctorScreen" component={LoginDoctorScreen} />
        <Stack.Screen
          name="LoginPatientScreen"
          component={LoginPatientScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CardDoctor" component={CardDoctor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
