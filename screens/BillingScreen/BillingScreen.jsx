import { Pressable, StyleSheet, Text, View } from "react-native";
import CategoryList from "./CategoryList";
import MenuList from "./MenuList";
import ThemedText from "../../components/ThemedText";
import { useState } from "react";
import Invoice from "./Invoice";
import { CategoryProvider } from "../../hooks/BillingContext";
import Cart from "../../components/Cart";

const BillingScreen = () => {
  const [activeTab, setActiveTab] = useState("Category");

  return (
    <View
      style={[
        styles.billingContainer,
        activeTab === "Cart" && { backgroundColor: "#fff" },
      ]}
    >
      <CategoryProvider>
        {/* navigation header  */}
        <View style={styles.navigationHeader}>
          {["Category", "Menu", "Cart"].map((item, index) => (
            <Pressable
              key={index}
              onPress={() => {
                setActiveTab(item);
              }}
              style={[
                styles.navigationTabs,
                activeTab === item && styles.activeTab,
              ]}
            >
              {item === "Cart" ? (
                <Cart />
              ) : (
                <ThemedText style={styles.navigationText}>{item}</ThemedText>
              )}
            </Pressable>
          ))}
        </View>
        {/* navigation lists Screens  */}
        {activeTab === "Category" && (
          <CategoryList setActiveTab={setActiveTab} />
        )}
        {activeTab === "Menu" && <MenuList />}
        {activeTab === "Cart" && <Invoice />}
      </CategoryProvider>
    </View>
  );
};
export default BillingScreen;

const styles = StyleSheet.create({
  billingContainer: {
    flex: 1,
    paddingTop: 5,
  },
  navigationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
  },
  navigationTabs: {
    borderWidth: 0.5,
    borderColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "33.33%",
    textAlign: "center",
    backgroundColor: "#233250",
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
  navigationText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  activeTab: {
    backgroundColor: "#dc1e5c",
  },
});
