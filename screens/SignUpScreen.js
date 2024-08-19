import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { auth } from "../firebaseConfig"; // Adjust the import path if needed
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const SignupScreen = ({ navigation }) => {
  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    if (!passwordRegex.test(password)) {
      alert("Password must contain at least 8 characters, including one letter and one number");
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert(
          'Signed Up Successfully',
          `Welcome ${Username}`,
          [
            {
              text: 'Continue',
              onPress: () => navigation.navigate('Login'),
              style: 'cancel',
            },
          ],
          {
            cancelable: false,
            onDismiss: () => navigation.navigate('Login'),
          }
        );
        console.log("User signed up:", user);
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error signing up:", errorMessage);
        alert(errorMessage);
      });
  };
  
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username :</Text>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Enter Username"
            value={Username}
            onChangeText={(text) => setUserName(text)}
            placeholderTextColor="#C9C9C9"
            style={{ flex: 1 }}
          />
        </View>
      </View>

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

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password :</Text>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#C9C9C9"
            style={{ flex: 1 }}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={{ color: "white" }}>Sign Up</Text>
      </TouchableOpacity>

      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

      <Text
        style={styles.backToLogin}
        onPress={() => navigation.navigate("Login")}
      >
        BACK TO LOGIN PAGE
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 30,
    fontWeight: "bold",
    paddingTop: 30,
    letterSpacing: 3,
    color: "#163C56",
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
  inputField: {
    flex: 1,
    backgroundColor: "white",
  },
  inputLabel: {
    fontSize: 16,
    paddingLeft: 15,
    color: "#163C56",
    marginRight: 10,
  },
  button: {
    backgroundColor: "#163C56",
    borderRadius: 3,
    padding: 16,
    width: 250,
    alignItems: "center",
  },
  backToLogin: {
    margin: 10,
    fontWeight: "bold",
    color: "grey",
  },
});

export default SignupScreen;


