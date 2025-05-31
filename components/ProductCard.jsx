import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const ProductCard = ({ name, item, handleProductClick }) => {
  const [productCardActive, setProductCardActive] = useState(false);

  return (
    <TouchableOpacity
      onPressIn={() => {
        setProductCardActive(true);
      }}
      onPressOut={() => {
        setProductCardActive(false);
      }}
      style={[
        styles.pressable_container,
        productCardActive && styles.productCardOnPress, // Apply opacity change on press
      ]}
      onPress={() => {
        handleProductClick(item);
      }}
      activeOpacity={0.7} // Built-in opacity feedback from TouchableOpacity
    >
      <View
        style={[
          styles.productCard,
          {
            backgroundColor: productCardActive
              ? "#1e4a64"
              : "rgb(204, 204, 204)",
          },
        ]}
      >
        <Text
          style={[
            styles.productCardText,
            { color: productCardActive ? "white" : "black" },
          ]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  pressable_container: {
    width: "48%",
    margin: "1%",
  },
  productCardOnPress: {
    opacity: 1,
  },
  productCard: {
    height: 85,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  productCardText: {
    fontSize: 16,
    textAlign: "center",
  },
});
