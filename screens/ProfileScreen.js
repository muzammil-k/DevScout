import React, { useRef, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const { engineer } = route.params || {};

  const slideAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Reset animations when screen is focused
  useFocusEffect(
    useCallback(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, [slideAnim, scaleAnim])
  );

  const handlePress = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 2, // Zoom in
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -70, // Slide up further
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      navigation.navigate("Hired", { engineer });
    });
  };

  return (
    <View style={styles.container}>
      {/* Fixed Header Content */}
      <View style={styles.fixedContent}>
        <View style={styles.imageContainer}>
          <Image source={engineer.image} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{engineer.position}</Text>
          <Text style={styles.position}>{engineer.name}</Text>
          <Text style={styles.description}>{engineer.description}</Text>
        </View>
      </View>

      {/* Scrollable Portfolio Section */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Portfolio</Text>
        <ScrollView
          contentContainerStyle={styles.portfolioContentContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.portfolioContainer}
        >
          <TouchableOpacity style={styles.portfolioBox}>
            <Image
              source={require("../assets/portfolio/1.jpeg")}
              style={styles.portfolioImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.portfolioBox}>
            <Image
              source={require("../assets/portfolio/2.jpeg")}
              style={styles.portfolioImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.portfolioBox}>
            <Image
              source={require("../assets/portfolio/3.jpeg")}
              style={styles.portfolioImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.portfolioBox}>
            <Image
              source={require("../assets/portfolio/4.jpeg")}
              style={styles.portfolioImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.portfolioBox}>
            <Image
              source={require("../assets/portfolio/5.jpeg")}
              style={styles.portfolioImg}
            />
          </TouchableOpacity>
        </ScrollView>


        <ScrollView
          contentContainerStyle={styles.portfolioContentContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.portfolioContainer}
        >
          <TouchableOpacity style={styles.portfolioBox}>
            <Image
              source={require("../assets/portfolio/5.jpeg")}
              style={styles.portfolioImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.portfolioBox}>
            <Image
              source={require("../assets/portfolio/4.jpeg")}
              style={styles.portfolioImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.portfolioBox}>
            <Image
              source={require("../assets/portfolio/3.jpeg")}
              style={styles.portfolioImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.portfolioBox}>
            <Image
              source={require("../assets/portfolio/2.jpeg")}
              style={styles.portfolioImg}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.portfolioBox}>
            <Image
              source={require("../assets/portfolio/1.jpeg")}
              style={styles.portfolioImg}
            />
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>

      {/* Fixed Footer */}
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Animated.View
            style={[
              styles.buttonWrapper,
              {
                transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
              },
            ]}
          >
            <TouchableOpacity style={styles.button1} onPress={handlePress}>
              <Ionicons name="arrow-up" size={18} color="white" />
              <Text style={styles.buttonText}>HIRE</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  fixedContent: {
    backgroundColor: "#F7F7F7",
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    height: 320,
    width: "100%",
    backgroundColor: "#163C56",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 80,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    backgroundColor: "#163C56",
    color: "white",
    padding: 10,
    marginTop: -50,
    textAlign: "center",
    borderRadius: 25,
  },
  position: {
    fontSize: 18,
    color: "gray",
    fontWeight: "800",
    marginBottom: 10,
    top: 5,
  },
  description: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  portfolioContainer: {
    backgroundColor: "#F7F7F7",
    padding: 10,
    width: "100%",
    marginBottom: 20,
  },
  portfolioContentContainer: {
    flexDirection: "row",
  },
  portfolioBox: {
    backgroundColor: "#ffffff",
    width: 200,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
    overflow: "hidden", // Ensure images are clipped within the box
  },
  portfolioImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    backgroundColor: "transparent",
  },
  button1: {
    backgroundColor: "#5EBC4B",
    borderRadius: 30,
    padding: 14,
    width: 100,
    bottom: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default ProfileScreen;
