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
    style={active ? styles.pageItemContainerActive : styles.pageItemContainer}
  >
    <Text style={active ? styles.textActive : styles.text}>{pageNumber}</Text>
  </View>
);

const pageItemContainerCommonStyles = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  height: 48,
  width: 48,
  borderRadius: 100,
  marginRight: 4,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
    flexBasis: "10%",
    position: "absolute",
    bottom: 0,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: theme.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  pageItemContainer: {
    ...pageItemContainerCommonStyles,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.secondary,
  },
  pageItemContainerActive: {
    ...pageItemContainerCommonStyles,
    backgroundColor: theme.secondary,
  },
  text: {
    color: theme.secondary,
  },
  textActive: {
    color: "#fff",
  },
});
