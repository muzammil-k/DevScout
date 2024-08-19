import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Hired = ({ route }) => {
  const navigation = useNavigation();
  const { engineer } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          typeof engineer.image === "string"
            ? { uri: engineer.image }
            : engineer.image
        }
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />

        <View style={styles.centeredContent}>
          <Text style={styles.name}>{engineer.name}</Text>
          <View style={styles.infoContainer}>
            <Ionicons name="call-sharp" size={20} color="white" />
            <Text style={styles.text}>{engineer.number}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Ionicons name="mail-sharp" size={20} color="white" />
            <Text style={styles.text}>{engineer.email}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Ionicons name="location-sharp" size={20} color="white" />
            <Text style={styles.text}>{engineer.address}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={30} color="#5EBC4B" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center", // Center content vertically
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(94, 188, 75, 0.8)",
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
    backgroundColor: "white",
    color: "#5EBC4B",
    padding: 10,
    width: "120%",
    textAlign: "center",
    bottom: 150,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 10,
  },
  backButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 15,
    position: "absolute",
    bottom: 80, 
    left: "50%",

    transform: [{ translateX: -30 }], // Center button horizontally
  },
});

export default Hired;
