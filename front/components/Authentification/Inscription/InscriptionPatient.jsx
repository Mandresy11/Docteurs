import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Picker,
  Image,
  Button,
} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

const RegisterPatient = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [birth, setBirth] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/role/getRole")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [photo, setPhoto] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      base64: false,
    });

    console.log(result);

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (
      !name ||
      !firstname ||
      !contact ||
      !birth ||
      !email ||
      !password 
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      // Convert the selected image to a blob
      const response = await fetch(photo);
      const blob = await response.blob();

      // Prepare the data to be sent to the server for registration
      const formData = new FormData();
      formData.append("name", name);
      formData.append("firstname", firstname);
      formData.append("birth", birth);
      formData.append("contact", contact);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("photo", blob, "photo.jpg");

      console.log(formData);

      // Send the POST request to the backend
      const res = await axios.post(
        "http://127.0.0.1:3000/patient/inscriptionPatient",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);
      Alert.alert("Success", "Registration successful");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Registration failed");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      <Text style={{ fontSize: 30 }}>Sign Up</Text>
      <View style={{ marginTop: 20 }}>
        <Text>Photo:</Text>
        {photo && (
          <Image source={{ uri: photo }} style={{ width: 100, height: 100 }} />
        )}
        <Button title="Pick an image from camera roll" onPress={pickImage} />

        {/* Rest of your form */}

        <Text>Nom :</Text>
        <TextInput
          style={{
            padding: 10,
            backgroundColor: "lightgray",
            borderRadius: 10,
            marginBottom: 10,
          }}
          placeholder="raharimanana"
          onChangeText={(text) => setName(text)}
        />
        <Text>Prénoms :</Text>
        <TextInput
          style={{
            padding: 10,
            backgroundColor: "lightgray",
            borderRadius: 10,
            marginBottom: 10,
          }}
          placeholder="fabiola"
          onChangeText={(text) => setFirstname(text)}
        />
        <Text>Contact:</Text>
        <TextInput
          style={{
            padding: 10,
            backgroundColor: "lightgray",
            borderRadius: 10,
            marginBottom: 10,
          }}
          placeholder="contact"
          onChangeText={(text) => setContact(text)}
        />
        <Text>Birthday:</Text>
        <TextInput
          style={{
            padding: 10,
            backgroundColor: "lightgray",
            borderRadius: 10,
            marginBottom: 10,
          }}
          placeholder="12/12/2002"
          onChangeText={(text) => setBirth(text)}
        />

        <Text>Email Address:</Text>
        <TextInput
          style={{
            padding: 10,
            backgroundColor: "lightgray",
            borderRadius: 10,
            marginBottom: 10,
          }}
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
        />
        <Text>Password:</Text>
        <TextInput
          style={{
            padding: 10,
            backgroundColor: "lightgray",
            borderRadius: 10,
            marginBottom: 10,
          }}
          secureTextEntry
          placeholder="mot de passe"
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            borderRadius: 20,
            padding: 15,
            alignItems: "center",
          }}
          onPress={handleSubmit}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterPatient;
