import { createContext, useState, useContext } from "react";
import { menuData } from "../services/billingdata";
import { useEffect } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(menuData[0].id);
  const [filteredProducts, setFilteredProducts] = useState(
    menuData[0].products
  );
  const [categoryName, setCategoryName] = useState(menuData[0].category);
  const [cartList, setCartList] = useState([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  // for debugging only below useEffect
  // useEffect(() => {
  //   console.log("selectedCategory", selectedCategory);
  //   console.log("filteredProducts", filteredProducts);
  // }, [selectedCategory]);

  useEffect(() => {
    setCartTotalQuantity(
      cartList.reduce((total, item) => total + item.quantity, 0)
    );
  }, [cartList]);
  // Function to handle category click
  const handleCategoryClick = (categoryId) => {
    // console.log("Category clicked:", categoryId);
    setSelectedCategory(categoryId);
    const selectedCategoryData = menuData.find(
      (item) => item.id === categoryId
    );
    if (selectedCategoryData) {
      setFilteredProducts(selectedCategoryData.products);
    } else {
      // If categoryId is null or not found, show all products
      setFilteredProducts(menuData.flatMap((item) => item.products));
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        selectedCategory,
        filteredProducts,
        categoryName,
        setCategoryName,
        handleCategoryClick,
        cartList,
        setCartList,
        cartTotalQuantity,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

// Create the custom hook to use the context
export const useCategory = () => {
  return useContext(CategoryContext);
};
