import { s } from "./CardDoctor.style";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../ProfilDoctor/ProfilDoctor.style";

export function CardDoctor({
  name,
  firstname,
  speciality,
  contact,
  photo,
  id,
}) {
  console.log(doctors);
  return (
    <View style={s.form}>
      <View key={id} style={s.form1}>
        <View style={s.image} ClassName="flex-row justify-center -mt-14">
          <Image
            style={s.photo}
            source={{ uri: `http://localhost:3000/uploads/${photo}` }}
          />
        </View>
        <Text style={s.text}>
          <Text style={s.text2}> Name </Text> {name} {firstname}
          <br />
          <Text style={s.text2}> Speacilité:</Text> {speciality}
          <br />
          <Text style={s.text2}> Contact </Text>
          {contact}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voir plus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
