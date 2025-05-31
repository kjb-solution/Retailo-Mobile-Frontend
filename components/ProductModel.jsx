import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import ThemedText from "./ThemedText";

const ProductModel = ({ product, modelCloseState, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementCount = () => {
    setQuantity(quantity + 1);
  };

  const decrementCount = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Pressable
      style={styles.modelContainer}
      onPress={() => modelCloseState(false)}
    >
      <Pressable
        style={styles.container}
        onPress={(event) => event.stopPropagation()}
      >
        <ThemedText style={styles.productName}>
          {product.name || "Product name"}
        </ThemedText>
        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.button} onPress={decrementCount}>
            <Text style={styles.buttonText}>
              <Entypo name="minus" size={24} color="black" />
            </Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.button} onPress={incrementCount}>
            <Text style={styles.buttonText}>
              <Entypo name="plus" size={24} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            handleAddToCart(product, quantity);
            setQuantity(1);
            modelCloseState();
          }}
        >
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  modelContainer: {
    position: "absolute",
    top: "-20%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "120%",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "80%",
    zIndex: 100,
  },
  productName: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    width: "80%",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  addButton: {
    backgroundColor: "#233250",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProductModel;
