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
      const numberOfPokemonsPerPage = 39;
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
        <View style={styles.centerContent}>
          <Text style={styles.loadingText}>...Loading</Text>
        </View>
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
  container: {
    backgroundColor: theme.primary,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  centerContent: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 24,
  },
  pokemonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 104,
  },
});
