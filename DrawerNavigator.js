// DrawerNavigator.js
import React from "react";
import { Alert } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import SettingsScreen from "./screens/Settings";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: async () => {
          try {
            await auth.signOut();
            // Navigate to Login screen after successful logout
            navigation.navigate("Login");
          } catch (error) {
            console.error("Error signing out: ", error);
          }
        },
      },
    ]);
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: "#163C56",
        drawerLabelStyle: { fontSize: 15 },
        headerShown: true,
        headerStyle: { backgroundColor: "#163C56" },
        headerTintColor: "white",
        drawerStyle: {
          backgroundColor: "#f5f5f5",
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LoginScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="log-out-outline" size={22} color={color} />
          ),
          drawerLabel: "Logout",
          drawerListItemStyle: {
            marginTop: 10,
          },
        }}
        listeners={{
          drawerItemPress: (e) => {
            e.preventDefault();
            handleLogout(); // Use the defined logout handler
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
