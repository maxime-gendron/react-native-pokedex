import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="md-arrow-back" size={32} color="#fff" />
      <Text style={styles.backButtonText}>Back to pokemons</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: 64,
    marginBottom: 24,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 8,
  },
});
