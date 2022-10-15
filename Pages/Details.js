import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import { theme } from "../utils/theme";
import { BackButton } from "../components/BackButton";
import { DetailsStats } from "../components/DetailsStats";

export const Details = ({ navigation, route }) => {
  const { pokemon } = route.params;
  const sectionListData = [
    {
      title: pokemon.types?.length > 1 ? "Types" : "Type",
      data: pokemon.types,
    },
    {
      title: "Stats",
      data: pokemon.stats,
    },
  ];

  console.log(pokemon);

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.identificationContainer}>
        <Image
          style={styles.image}
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
    flex: 1,
    backgroundColor: theme.primary,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  image: {
    height: 180,
    width: 180,
    backgroundColor: theme.secondary,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "white",
  },
  identificationContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  identificationText: {
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "white",
  },
  dataContainer: {
    flexDirection: "column",
    marginBottom: 32,
  },
  sectionHeading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
});
