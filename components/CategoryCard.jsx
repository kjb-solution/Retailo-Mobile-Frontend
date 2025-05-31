import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useCategory } from "../hooks/BillingContext";

const CategoryCard = ({ id, name, handleCategoryClick }) => {
  const [menuCardActive, setMenuCardActive] = useState(false);
  const { categoryName } = useCategory();
  return (
    <Pressable
      style={styles.cardWrapper}
      onPress={() => {
        setMenuCardActive(!menuCardActive);
        handleCategoryClick(id, name);
      }}
    >
      <View
        style={[
          styles.menuCard,
          categoryName === name && styles.menuCardOnPress,
        ]}
      >
        <Text style={styles.menuCardText}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: "48%",
    margin: "1%",
  },
  menuCard: {
    height: 85,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e4a64",
    borderWidth: 2,
    borderColor: "#1e4a64",
  },
  menuCardOnPress: {
    backgroundColor: "#154d53",
    borderColor: "#000",
  },
  menuCardText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
