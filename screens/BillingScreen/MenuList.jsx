import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import ProductCard from "../../components/ProductCard";
import { useCategory } from "../../hooks/BillingContext";
import ThemedText from "../../components/ThemedText";
import { Feather } from "@expo/vector-icons";
import ProductModel from "../../components/ProductModel";

const MenuList = () => {
  const { filteredProducts, categoryName, setCartList, cartList } =
    useCategory();
  const [searchText, setSearchText] = useState("");
  const [searchedProducts, setSearchedProducts] = useState(filteredProducts);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredResults = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchedProducts(filteredResults);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModelOpen(true);
  };

  const handleAddToCart = (product, quantity) => {
    const existingProduct = cartList.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCartList = cartList.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartList(updatedCartList);
    } else {
      const newProduct = { ...product, quantity };
      setCartList([...cartList, newProduct]);
    }
  };
  // for debugging only below useEffect
  // useEffect(() => {
  //   console.log("cartList", cartList);
  // }, [cartList]);

  return (
    <View style={{ minHeight: "100%" }}>
      <ThemedText style={styles.menuText}>{categoryName}</ThemedText>
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search Products"
          style={styles.searchInput}
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <FlatList
        numColumns={2}
        data={searchedProducts}
        keyExtractor={(item) =>
          item.id ? item.id.toString() : Math.random().toString()
        }
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <ProductCard
            key={item.id}
            name={item.name}
            item={item}
            handleProductClick={handleProductClick}
          />
        )}
      />
      {isModelOpen && (
        <ProductModel
          product={selectedProduct}
          modelCloseState={setIsModelOpen}
          handleAddToCart={handleAddToCart}
        />
      )}
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  scrollViewStyle: {
    marginTop: 10,
  },
  menuText: {
    fontSize: 25,
    padding: 5,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },

  flatListContainer: {
    justifyContent: "space-between",
  },
});
