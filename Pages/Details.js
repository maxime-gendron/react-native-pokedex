import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import { theme } from "../utils/theme";
import { BackButton } from "../components/BackButton";
import { DetailsStats } from "../components/DetailsStats";

export const Details = ({ navigation, route }) => {
  const { pokemon } = route.params;
  const sectionListData = [
    {
      title: pokemon.types.length > 1 ? "Types" : "Type",
      data: pokemon.types,
    },
    {
      title: "Stats",
      data: pokemon.stats,
    },
  ];

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.identificationContainer}>
        <Image
          style={styles.avatarImage}
          source={{ uri: pokemon.sprites.front_default }}
        />
        <Text style={styles.identificationText}>{pokemon.name}</Text>
      </View>
      <DetailsStats data={sectionListData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    flex: 1,
    paddingBottom: 32,
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight,
  },
  avatarImage: {
    backgroundColor: theme.secondary,
    borderColor: "#fff",
    borderRadius: 100,
    borderWidth: 4,
    height: 180,
    width: 180,
  },
  identificationContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  identificationText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  dataContainer: {
    marginBottom: 32,
  },
  sectionHeading: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
  },
});
