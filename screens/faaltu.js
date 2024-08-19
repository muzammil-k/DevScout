import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function pop() {
  alert("you pressed the button");
}

export default function faaltu() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.button}
          onPress={pop}
        ></TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },
  container1: {
    backgroundColor: "red",
    flex: 1,
  },
  container2: {
    backgroundColor: "blue",
    flex: 1,
  },

  button: {
    backgroundColor: "green",
    justifyContent: "center",
  },

  text1: {
    color: "white",
  },
});
