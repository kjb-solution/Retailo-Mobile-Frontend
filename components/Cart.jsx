import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Badge } from "react-native-elements";
import ThemedText from "./ThemedText";
import { useCategory } from "../hooks/BillingContext";

const Cart = () => {
  const { cartTotalQuantity } = useCategory();
  // console.log("cartTotalQuantity", cartTotalQuantity);
  return (
    <View style={styles.cartContainer}>
      <ThemedText style={{ color: "white" }}>Cart</ThemedText>
      <View style={styles.container}>
        <FontAwesome name="shopping-cart" size={22} color="white" />
        <Badge
          value={cartTotalQuantity || 0}
          containerStyle={styles.badgeContainer}
          textStyle={styles.badgeText}
          badgeStyle={{ backgroundColor: "#233250" }}
        />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeContainer: {
    position: "absolute",
    top: -8,
    right: -4,

    width: "auto",
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
