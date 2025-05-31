import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { menuData } from "../../services/billingdata";
import CategoryCard from "../../components/CategoryCard";
import { useCategory } from "../../hooks/BillingContext";

const CategoryList = ({ setActiveTab }) => {
  const { handleCategoryClick, setCategoryName } = useCategory();

  const handleCardPress = (id, name) => {
    setCategoryName(name);
    handleCategoryClick(id);
    setActiveTab("Menu");
  };

  return (
    <FlatList
      numColumns={2}
      data={menuData}
      renderItem={({ item }) => (
        <CategoryCard
          key={item.id}
          id={item.id}
          name={item.category}
          handleCategoryClick={handleCardPress}
        />
      )}
      contentContainerStyle={styles.flatListContainer}
      scrollEnabled={true}
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  flatListContainer: {
    justifyContent: "space-between",
  },
});
