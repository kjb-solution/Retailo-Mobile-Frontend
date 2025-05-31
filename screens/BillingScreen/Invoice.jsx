import { StyleSheet, Text, View } from "react-native";
import { useCategory } from "../../hooks/BillingContext";
import ThemedText from "../../components/ThemedText";

const Invoice = () => {
  const { cartList } = useCategory();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.headerText}>Item</ThemedText>
        <ThemedText style={styles.headerText}>Qty</ThemedText>
        <ThemedText style={styles.headerText}>Price</ThemedText>
      </View>
      {cartList.map((item, index) => (
        <View
          key={item.id}
          style={[styles.row, index % 2 !== 0 && styles.evenRow]}
        >
          <ThemedText style={[styles.cell, styles.cellLeft]}>
            {item.name}
          </ThemedText>
          <ThemedText style={styles.cell}>{item.quantity}</ThemedText>
          <ThemedText style={[styles.cell, styles.cellRight]}>
            {item.price}
          </ThemedText>
        </View>
      ))}
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  evenRow: {
    backgroundColor: "#f5f5f5",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    width: "33.33%",
    paddingHorizontal: 10,
    fontSize: 12,
  },
  cellRight: {
    flex: 1,
    textAlign: "right",
  },
  cellLeft: {
    flex: 1,
    textAlign: "left",
  },
});
