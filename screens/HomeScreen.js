import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import Engineers from "./EngineersData";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  const filteredEng = Engineers.filter(
    (engineer) =>
      engineer.name.toLowerCase().includes(searchText.toLowerCase()) ||
      engineer.position.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#808080"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
        </View>
      </View>

      <ScrollView style={styles.body}>
        {filteredEng.map((engineer) => (
          <TouchableOpacity
            style={styles.infobox}
            key={engineer.name}
            onPress={() =>
              navigation.navigate("ProfileScreen", { engineer })
            }
          >
            <View style={styles.insidebox}>
              <View style={styles.insidebox1}>
                <Image source={engineer.image} style={styles.image} />
                <View style={styles.priceBox}>
                  <Text style={styles.priceText}>{engineer.price}</Text>
                </View>
              </View>
              <View style={styles.insidebox2}>
                <Text style={styles.insideboxtextHeader}>
                  {engineer.name}
                </Text>
                <Text style={styles.insideboxtextPosition}>
                  {engineer.position}
                </Text>
                <Text style={styles.insideboxtextdecr}>
                  {engineer.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 0.2, // Adjust this value as needed
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginHorizontal: 10,
    marginBottom: 10, // Adjust margin as needed
  },
  body: {
    flex: 1, // This ensures the ScrollView takes up the remaining space
    backgroundColor: "#fff",
  },
  infobox: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    height: 150,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ddd",
  },
  insidebox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
    width: "90%",
  },
  insidebox1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    position: "relative",
  },
  insidebox2: {
    flex: 3,
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 10,
  },
  insideboxtextHeader: {
    fontSize: 20,
    marginLeft: 10,
    color: "#163C56",
    fontWeight: "bold",
  },
  insideboxtextPosition: {
    fontSize: 16,
    marginLeft: 10,
    color: "grey",
    fontWeight: "bold",
  },
  insideboxtextdecr: {
    fontSize: 15,
    marginLeft: 10,
    color: "grey",
    fontStyle: "italic",
    top: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  priceBox: {
    position: "absolute",
    top: 85,
    backgroundColor: "#163C56",
    padding: 5,
    borderRadius: 5,
  },
  priceText: {
    fontSize: 12,
    color: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});


export default HomeScreen;
