import { s } from "./CardDoctor.style";
<<<<<<< HEAD
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../ProfilDoctor/ProfilDoctor.style";
import { useNavigation } from "@react-navigation/native";
import ProfilDoctor from "../ProfilDoctor/ProfilDoctor";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
=======
import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import axios from "axios"; // Import axios for making API requests
>>>>>>> 11bfe0a807798091d943afbb8afc2cff02e8c87f

const Stack = createStackNavigator();

<<<<<<< HEAD
export function CardDoctor({
  name,
  firstname,
  speciality,
  contact,
  photo,
  id,
}) {
  const navigation = useNavigation();
=======
  const idDoctor = localStorage.getItem('id');
  console.log(idDoctor)

  const token = localStorage.getItem('token');
  console.log(token)
  if(!token){
    navigation.navigate("accueil")
  }
  const [doctors, setDoctors] = useState([]);
>>>>>>> 11bfe0a807798091d943afbb8afc2cff02e8c87f

  const navigateToProfileDoctor = () => {
    navigation.navigate("ProfilDoctors"); // Utilisez le nom de l'itinéraire, pas le composant
  };

  return (
    <NavigationContainer>
      <View style={s.form}>
        <View key={id} style={s.form1}>
          <View style={s.image} className="flex-row justify-center -mt-14">
            <Image
              style={s.photo}
              source={{ uri: `http://localhost:3000/uploads/${photo}` }}
            />
          </View>
          <Text style={s.text}>
            <Text style={s.text2}> Name </Text> {name} {firstname}
            <br />
<<<<<<< HEAD
            <Text style={s.text2}> Spécialité:</Text> {speciality}
            <br />
            <Text style={s.text2}> Contact </Text>
            {contact}
=======
            <Text style={s.text2}> Spécialité:</Text> {doctor.speciality}
            <br />
            <TouchableOpacity
              onPress={() => {
              navigation.navigate('callScreen', { doctorId: doctor._id });
           }}
    >
          <Text>Appeler maintenant</Text>
          </TouchableOpacity>
>>>>>>> 11bfe0a807798091d943afbb8afc2cff02e8c87f
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ProfilDoctors")}
          >
            <Text style={styles.buttonText}>Voir plus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NavigationContainer>
  );
}

export default CardDoctor;
