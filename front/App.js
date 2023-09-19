<<<<<<< HEAD
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CardRdv from "./components/CardRdv/CardRdv";
import { Header } from "./components/Header/Header";
import { CardList } from "./components/CardList/CardList";
import { ProfilDoctor } from "./components/ProfilDoctor/ProfilDoctor";
import Sary from "./assets/fond.jpg";
import { s } from "./components/CardDoctor/CardDoctor.style";
import Display from "./screens/Display";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CardDoctor from "./components/CardDoctor/CardDoctorList";

/* Importez vos composants de vue
import CardDoctors from './components/CardDoctor/CardDoctorList';
import RegisterPatient  from './components/Authentification/Inscription/InscriptionPatient';
import RegisterDoctor from './components/Authentification/Inscription/InscriptionDoctor';

import LoginDoctorScreen from './components/Authentification/Login/LoginDoctor';
import LoginPatientScreen from './components/Authentification/Login/LoginPatient';

const Stack = createStackNavigator();
*/
const App = () => {
  return (
    <ImageBackground source={Sary} style={s.form}>
      <SafeAreaProvider>
        <SafeAreaView style={s.form}>
          <CardDoctor />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

/*import { CardDoctor } from "./components/CardDoctor/CardDoctor";
import { s } from "./components/CardDoctor/CardDoctor.style";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
=======
>>>>>>> 11bfe0a807798091d943afbb8afc2cff02e8c87f
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginDoctorScreen from "./screens/LoginDoctorScreen";
import LoginPatientScreen from "./screens/LoginPatientScreen";
import RegisterScreen from "./screens/RegisterPatientScreen";
import RegisterDoctorScreen from "./screens/RegisterDoctorScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
<<<<<<< HEAD

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
=======
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="home" component={CardDoctors} />
        <Stack.Screen name="inscriptionDoctor" component={RegisterDoctor} />
        {/* <Stack.Screen name="inscriptionPatient" component={} /> }
<<<<<<< HEAD
        <Stack.Screen name="" component={LoginDoctorScreen} />
>>>>>>> 08ae69193ae891dfe2ad4bb843c9c191d8f2ace8
=======
        <Stack.Screen name="login" component={LoginPatientScreen} />
        <Stack.Screen name="inscriptionPatient" component={RegisterPatient} />
        <Stack.Screen name="loginDoctor" component={LoginDoctorScreen} />

   
 
>>>>>>> b47a238b15d7f4a0c4bed663b9130e7adc0973ff
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importez vos composants de vue
import CardDoctors from './components/CardDoctor/CardDoctorList';
import RegisterPatient  from './components/Authentification/Inscription/InscriptionPatient';
import RegisterDoctor from './components/Authentification/Inscription/InscriptionDoctor';

import LoginDoctorScreen from './components/Authentification/Login/LoginDoctor';
import LoginPatientScreen from './components/Authentification/Login/LoginPatient';
import AppointmentsScreen from './components/VisioConference/VisioConference';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="home" component={CardDoctors} />
        <Stack.Screen name="inscriptionDoctor" component={RegisterDoctor} />
        <Stack.Screen name="inscriptionPatient" component={RegisterPatient} />
        <Stack.Screen name="login" component={LoginDoctorScreen} />  
        <Stack.Screen name="loginPatient" component={LoginPatientScreen} />   
        <Stack.Screen name="callScreen" component={AppointmentsScreen} initialParams={{ doctorId: null }}/>   
>>>>>>> 11bfe0a807798091d943afbb8afc2cff02e8c87f
      </Stack.Navigator>
    </NavigationContainer>
  );
};
*/
export default App;
