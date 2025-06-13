import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const reports = [
  {
    id: "1",
    name: "John Doe",
    billingMethod: "GPay",
    amount: "₹293.00",
    date: "06 Sept 2025",
    time: "14:32",
    invoiceId: "INV-1001",
  },
  {
    id: "2",
    name: "Jane Smith",
    billingMethod: "Cash",
    amount: "₹150.00",
    date: "05 Sept 2025",
    time: "10:15",
    invoiceId: "INV-1002",
  },
  {
    id: "3",
    name: "Michael Brown",
    billingMethod: "Card",
    amount: "₹430.00",
    date: "04 Sept 2025",
    time: "17:20",
    invoiceId: "INV-1003",
  },
  {
    id: "4",
    name: "Steve Smith",
    billingMethod: "Cash",
    amount: "₹200.00",
    date: "05 Sept 2025",
    time: "10:15",
    invoiceId: "INV-1002",
  },
  {
    id: "5",
    name: "Michael Jhonson",
    billingMethod: "Card",
    amount: "₹450.00",
    date: "04 Sept 2025",
    time: "17:20",
    invoiceId: "INV-1003",
  },
  {
    id: "6",
    name: "Travis Head",
    billingMethod: "GPay",
    amount: "₹100.00",
    date: "05 Sept 2025",
    time: "10:15",
    invoiceId: "INV-1002",
  },
  {
    id: "7",
    name: "Michael Strac",
    billingMethod: "Card",
    amount: "₹300.00",
    date: "04 Sept 2025",
    time: "17:20",
    invoiceId: "INV-1003",
  },
];

export default function ReportListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Details", { report: item })}
    >
      <View style={styles.leftSection}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subText}>
          #{item.invoiceId} • {item.date} {item.time}
        </Text>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>

      <View style={[styles.badge, getBadgeStyle(item.billingMethod)]}>
        <Text style={styles.badgeText}>{item.billingMethod}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const getBadgeStyle = (method) => {
  switch (method) {
    case "GPay":
      return { backgroundColor: "#00C853" }; // green
    case "Cash":
      return { backgroundColor: "#FFAB00" }; // amber
    case "Card":
      return { backgroundColor: "#2962FF" }; // blue
    default:
      return { backgroundColor: "#BDBDBD" }; // gray
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
    color: "#888",
    marginVertical: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});
