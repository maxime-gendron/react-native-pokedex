import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import { ListItem } from "../components/ListItem";
import { Pagination } from "../components/Pagination";
import { theme } from "../utils/theme";

export const Home = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const numberOfPokemonsPerPage = 30;
      const offset = currentPage * numberOfPokemonsPerPage;
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemonsPerPage}}&offset=${offset}`
      );
      const fetchedItems = await res.json();

      setPokemons(fetchedItems.results);
      setLoading(false);
    };
    fetchPokemons();
  }, [currentPage]);

  return (
    <View style={styles.container}>
      {loading && pokemons ? (
        <Text>...Loading</Text>
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.pokemonContainer}>
            {pokemons.map((pokemon) => (
              <ListItem
                key={pokemon.name}
                item={pokemon}
                navigation={navigation}
              />
            ))}
          </ScrollView>
          <Pagination
            numberOfPages={5}
            currentPage={currentPage}
            onChange={setCurrentPage}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 104,
  },
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
