import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import { useCategory } from "../../hooks/BillingContext";
import ThemedText from "../../components/ThemedText";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Entypo } from "@expo/vector-icons";
import InvoiceFooter from "./InvoiceFooter";
import { useState } from "react";

const Invoice = () => {
  const { cartList, setCartList } = useCategory();
  const [selectedPayment, setSelectedPayment] = useState("UPI");

  // Manually calculating the total for each item
  const updatedCartList = cartList.map((item) => ({
    ...item,
    total: item.quantity * item.price,
  }));

  const increaseQuantity = (id) => {
    setCartList(
      cartList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (id) => {
    const existingItem = cartList.find((item) => item.id === id);
    if (existingItem && existingItem.quantity === 1) {
      setCartList(cartList.filter((item) => item.id !== id));
    } else {
      setCartList(
        cartList.map((item) => {
          if (item.id === id && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
      );
    }
  };
  const deleteItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  // Manually calculating the grand total
  const grandTotal = updatedCartList.reduce((sum, item) => sum + item.total, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={[styles.headerText, styles.name]}>Name</ThemedText>
        <ThemedText style={[styles.headerText, styles.rate]}>Rate</ThemedText>
        <ThemedText style={[styles.headerText, styles.quantity]}>
          Quantity
        </ThemedText>
        <ThemedText style={[styles.headerText, styles.total]}>Total</ThemedText>
        <ThemedText style={[styles.headerText, styles.delete]}></ThemedText>
      </View>
      <View style={styles.separator}>
        <FlatList
          data={updatedCartList}
          keyExtractor={(item) => item.id}
          renderItem={(item, index) => (
            <View
              key={item.item.id}
              style={[styles.row, index % 2 !== 0 && styles.evenRow]}
            >
              <ThemedText
                style={[
                  styles.cell,
                  styles.cellLeft,
                  styles.name,
                  styles.noWrap,
                ]}
              >
                {item.item.name}
              </ThemedText>
              <ThemedText style={[styles.cell, styles.cellRight, styles.rate]}>
                {item.item.price}
              </ThemedText>
              <View
                style={[
                  styles.cell,
                  styles.cellCenter,
                  styles.quantityContainer,
                  styles.quantity,
                  { paddingHorizontal: 0 },
                ]}
              >
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => decreaseQuantity(item.item.id)}
                >
                  <Entypo name="minus" size={18} color="black" />
                </TouchableOpacity>
                <ThemedText style={styles.quantityText}>
                  {item.item.quantity}
                </ThemedText>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => increaseQuantity(item.item.id)}
                >
                  <Entypo name="plus" size={18} color="black" />
                </TouchableOpacity>
              </View>
              <ThemedText style={[styles.cell, styles.cellRight, styles.total]}>
                {item.item.total.toFixed(2)}
              </ThemedText>
              <View style={[styles.cell, styles.cellCenter, styles.delete]}>
                <TouchableOpacity onPress={() => deleteItem(item.item.id)}>
                  <MaterialCommunityIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <InvoiceFooter
          grandTotal={grandTotal}
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
        />
      </View>
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontWeight: "700",
    textAlign: "center",
    paddingHorizontal: 5,
    fontSize: 14,
  },
  name: {
    flex: 0.5,
    textAlign: "left",
    paddingHorizontal: 5,
  },
  rate: {
    flex: 0.15,
    textAlign: "center",
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  quantity: {
    flex: 0.3,
    textAlign: "center",
  },
  total: {
    flex: 0.22,
    textAlign: "center",
    justifyContent: "center",
  },
  delete: {
    flex: 0.1,
    textAlign: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  evenRow: {},
  cell: {
    textAlign: "center",
    paddingHorizontal: 5,
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  cellLeft: {
    textAlign: "left",
  },
  cellRight: {
    textAlign: "right",
  },
  cellCenter: {
    textAlign: "center",
  },
  noWrap: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    borderRadius: 100,
  },
  quantityButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  separator: {
    justifyContent: "space-between",
    height: "93%",
  },
});
