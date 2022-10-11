import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

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
    <SafeAreaView style={styles.pagesContainer}>
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
  <View onTouchStart={onTouch} style={active ? styles.pageItemContainerActive : styles.pageItemContainer}>
    <Text style={active ? styles.textActive : undefined}>{pageNumber}</Text>
  </View>
);

const pageItemCommonStyles = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 48,
    borderRadius: 8,
    marginRight: 4,
}

const styles = StyleSheet.create({
  pagesContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    flexBasis: "10%",
  },
  pageItemContainer: {
    ...pageItemCommonStyles,
    backgroundColor: "#fff",
  },
  pageItemContainerActive: {
    ...pageItemCommonStyles,
    backgroundColor: "#000",
    color: "#fff",
  },
  textActive: {
    color: "#fff",
  }
});
