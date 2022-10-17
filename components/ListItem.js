import { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

export const ListItem = ({ item, navigation }) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(item.url);
      const fetchedItem = await res.json();

      setPokemon(fetchedItem);
      setLoading(false);
    };
    fetchPokemon();
  }, [item]);

  if (loading) return null;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", { pokemon })}
    >
      {pokemon && (
        <>
          <Image
            style={styles.image}
            source={{ uri: pokemon.sprites.front_default }}
          />
          <Text style={styles.text}>{pokemon.name}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexBasis: "33.33%",
    marginTop: 16,
    width: "33.33%",
  },
  image: {
    height: Dimensions.get("window").height / 10,
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginTop: 8,
    textTransform: "capitalize",
  },
});
