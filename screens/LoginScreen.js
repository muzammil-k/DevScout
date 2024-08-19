import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from "../firebaseConfig"; // Adjust the import path if needed
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("GetStarted");
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/login.jpg")} style={styles.image} />
      </View>

      <View style={styles.background}></View>

      <View style={styles.contentContainer}>
        <Text
          style={{
            fontSize: 40,
            marginBottom: 30,
            fontWeight: "bold",
            paddingTop: 30,
            letterSpacing: 3,
            color: "#163C56",
          }}
        >
          LOGIN
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email :</Text>
          <View style={styles.inputField}>
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor="#C9C9C9"
              style={{ flex: 1 }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password :</Text>
          <View style={styles.inputField}>
            <TextInput
              placeholder="Enter Password"
              secureTextEntry
              placeholderTextColor="#C9C9C9"
              style={{ flex: 1 }}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: "white", fontSize: 20 }}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.registerButton}>
          Don't have an account?{" "}
          <Text
            style={[styles.registerButton, { color: "#2181C1" }]}
            onPress={() => navigation.navigate("Signup")}
          >
            Click here to register
          </Text>
        </Text>

        <Text
          style={{
            color: "black",
            fontVariant: "small-caps",
            marginTop: 30,
            fontSize: 15,
          }}
        >
          Or sign in with
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.buttonsocial, { backgroundColor: "#3B5998" }]}
            onPress={() => null}
          >
            <Ionicons name="logo-facebook" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonsocial, { backgroundColor: "red" }]}
            onPress={() => null}
          >
            <Ionicons name="logo-google" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3.5,
    backgroundColor: "#163C56",
  },
  imageContainer: {
    flex: 1.8,
    height: "100%",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 15,
    paddingTop: 30,
    marginTop: "55%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    height: 50,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "#163C56",
    borderWidth: 2,
  },
  inputLabel: {
    color: "#163C56",
    flex: 1,
    marginLeft: 20,
  },
  inputField: {
    flex: 3,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#163C56",
    borderRadius: 3,
    padding: 16,
    width: 250,
    alignItems: "center",
  },

  buttonsocial: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    marginTop: 10,
    width: 70,
    alignItems: "center",
  },

  registerButton: {
    marginTop: 12,
  },
});
