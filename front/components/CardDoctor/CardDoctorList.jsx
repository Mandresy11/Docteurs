import { s } from "./CardDoctor.style";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../ProfilDoctor/ProfilDoctor.style";
import { useNavigation } from "@react-navigation/native";
import ProfilDoctor from "../ProfilDoctor/ProfilDoctor";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function CardDoctor({
  name,
  firstname,
  speciality,
  contact,
  photo,
  id,
}) {
  const navigation = useNavigation();

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
            <Text style={s.text2}> Spécialité:</Text> {speciality}
            <br />
            <Text style={s.text2}> Contact </Text>
            {contact}
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
