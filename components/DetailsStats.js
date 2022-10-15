import { View, StyleSheet, Text, SectionList } from "react-native";

export const DetailsStats = ({ data }) => {
  const renderItem = ({ item, section }) => {
    if (section.title === "Types" || section.title === "Type") {
      return <TypesItem value={item.type.name} />;
    }
    return <StatItem name={item.stat.name} value={item.base_stat} />;
  };

  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeading}>{title}</Text>
      )}
    />
  );
};

const TypesItem = ({ value }) => (
  <View style={styles.type}>
    <Text style={styles.capitalizeText}>{value}</Text>
  </View>
);

const StatItem = ({ name, value }) => (
  <View style={styles.container}>
    <Text style={styles.capitalizeText}>{name}</Text>
    <Text style={styles.capitalizeText}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  capitalizeText: {
    textTransform: "capitalize",
    color: "white",
    fontSize: 24,
  },
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  sectionHeading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    marginTop: 16,
  },
});
