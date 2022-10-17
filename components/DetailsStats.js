import { View, StyleSheet, Text, SectionList } from "react-native";

export const DetailsStats = ({ data }) => {
  const renderItem = ({ item, section }) => {
    if (section.title === "Stats") {
      return <StatItem name={item.stat.name} value={item.base_stat} />;
    }
    return <TypesItem value={item.type.name} />;
  };

  const keyExtractor = (item, index) => {
    if (item.type) {
      return item.type.name;
    } else if (item.stat) {
      return item.stat.name;
    }
    return index;
  };

  return (
    <SectionList
      sections={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeading}>{title}</Text>
      )}
    />
  );
};

const TypesItem = ({ value }) => (
  <View style={styles.type}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

const StatItem = ({ name, value }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    textTransform: "capitalize",
  },
  sectionHeading: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 16,
  },
});
