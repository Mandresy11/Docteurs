import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./ProfilDoctor.style";

const ProfilDoctor = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/photo.jpg")}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Mandrest</Text>
      <Text style={styles.description}>Docteur experimenté</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Rendez-vous</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilDoctor;
