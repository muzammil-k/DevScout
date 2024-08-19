import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/gets.jpg")} style={styles.image} />
        <View style={styles.ceoContainer}>
          <Text style={styles.ceoText}>CEO | Muzammil Khan</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text
          style={{
            fontSize: 30,
            color: "grey",
            marginTop: 10,
            marginRight: 10,
            marginLeft: 10,
            textAlign: "center",
          }}
        >
          {"Consult With the best "}
          <Text style={{ color: "#163C56", fontWeight: "bold" }}>
            Software Engineers{" "}
          </Text>
          <Text style={{ color: "grey" }}>in your town </Text>
        </Text>
        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 20 }}>Get Started </Text>
            <Text style={{ color: "white", fontSize: 20, marginLeft: 5 }}>
              {"\u2794"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#163C56",
  },
  imageContainer: {
    flex: 1.8,
    height: "100%",
    justifyContent: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  ceoContainer: {
    position: "absolute",
    top: "10%", // Adjust this value to control the distance from the top of the image
    left: "25%",
    backgroundColor: "#163C56",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    width: "50%",
  },
  ceoText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: "#163C56",
    borderRadius: 3,
    padding: 16,
    width: 250,
    alignItems: "center",
  },
  contentContainer: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 15,
    paddingTop: 30,
    marginTop: "120%",
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    height: "35%",
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
});

export default GetStartedScreen;
