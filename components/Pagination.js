import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { theme } from "../utils/theme";

export const Pagination = ({ numberOfPages, currentPage, onChange }) => {
  const pagesData = [...Array(numberOfPages).keys()].map((value) => ({
    id: value,
    pageNumber: value,
  }));

  const renderPageItem = ({ item: { pageNumber } }) => (
    <Item
      active={currentPage === pageNumber}
      pageNumber={pageNumber + 1}
      onTouch={() => onChange(pageNumber)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={pagesData}
        renderItem={renderPageItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const Item = ({ active, pageNumber, onTouch }) => (
  <View
    onTouchStart={onTouch}
    style={active ? styles.pageItemActive : styles.pageItem}
  >
    <Text style={active ? styles.textActive : styles.text}>{pageNumber}</Text>
  </View>
);

const pageItemCommonStyles = {
  alignItems: "center",
  borderRadius: 100,
  height: 52,
  justifyContent: "center",
  marginRight: 4,
  width: 52,
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: theme.primary,
    elevation: 14,
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    width: "100%",
  },
  pageItem: {
    ...pageItemCommonStyles,
    backgroundColor: "#fff",
    borderColor: theme.secondary,
    borderWidth: 2,
  },
  pageItemActive: {
    ...pageItemCommonStyles,
    backgroundColor: theme.secondary,
  },
  text: {
    color: theme.secondary,
    fontSize: 18,
  },
  textActive: {
    color: "#fff",
    fontSize: 18,
  },
});
