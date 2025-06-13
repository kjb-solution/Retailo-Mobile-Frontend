import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const WaterFillCard = ({ title, value, iconName, iconColor }) => {
  return (
    <View style={styles.waterCard}>
      <View style={styles.waterCardContent}>
        <View>
          <Text style={styles.waterCardTitle}>{title}</Text>
          <Text style={styles.waterCardValue}>{value}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Icon name={iconName} size={30} color={iconColor} />
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const allInvoices = [
    {
      id: "1",
      customer: "John Doe",
      invoiceNo: "INV-1001",
      amount: "₹293.00",
      date: "06 Sept 2025",
      status: "Paid",
    },
    {
      id: "2",
      customer: "Jane Smith",
      invoiceNo: "INV-1002",
      amount: "₹480.50",
      date: "05 Sept 2025",
      status: "Pending",
    },
    {
      id: "3",
      customer: "Michael Brown",
      invoiceNo: "INV-1003",
      amount: "₹120.75",
      date: "03 Sept 2025",
      status: "Overdue",
    },
    {
      id: "4",
      customer: "Michael Jhonson",
      invoiceNo: "INV-1003",
      amount: "₹120.75",
      date: "03 Sept 2025",
      status: "Pending",
    },
    {
      id: "5",
      customer: "Steve Smith",
      invoiceNo: "INV-1003",
      amount: "₹120.75",
      date: "03 Sept 2025",
      status: "Paid",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvoices = allInvoices.filter(
    (invoice) =>
      invoice.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.invoiceNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by customer or invoice number..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <View style={styles.cardContainer}>
        <WaterFillCard
          title="Total Invoices"
          value="50"
          iconName="file-document-outline"
          iconColor="#3498db"
        />
        <WaterFillCard
          title="Paid"
          value="85"
          iconName="check-circle-outline"
          iconColor="#2ecc71"
        />
        <WaterFillCard
          title="Pending"
          value="25"
          iconName="clock-outline"
          iconColor="#f1c40f"
        />
        <WaterFillCard
          title="Overdue"
          value="10"
          iconName="alert-circle-outline"
          iconColor="#e74c3c"
        />
      </View>

      <Text style={styles.sectionTitle}>Recent Invoices</Text>
      <FlatList
        data={filteredInvoices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.invoiceCard}>
            <Text style={styles.invoiceCustomer}>{item.customer}</Text>
            <Text style={styles.invoiceDetails}>
              #{item.invoiceNo} • {item.date}
            </Text>
            <View style={styles.invoiceFooter}>
              <Text style={styles.invoiceAmount}>{item.amount}</Text>
              <Text
                style={[
                  styles.invoiceStatus,
                  item.status === "Paid"
                    ? styles.statusPaid
                    : item.status === "Pending"
                    ? styles.statusPending
                    : styles.statusOverdue,
                ]}
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  waterCard: {
    width: "48%",
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  waterCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  waterCardTitle: {
    fontSize: 13,
    color: "#333",
  },
  waterCardValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  invoiceCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  invoiceCustomer: {
    fontSize: 16,
    fontWeight: "bold",
  },
  invoiceDetails: {
    fontSize: 13,
    color: "#888",
    marginVertical: 4,
  },
  invoiceFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  invoiceAmount: {
    fontSize: 16,
    fontWeight: "600",
  },
  invoiceStatus: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  statusPaid: {
    backgroundColor: "#2ecc71",
  },
  statusPending: {
    backgroundColor: "#f1c40f",
  },
  statusOverdue: {
    backgroundColor: "#e74c3c",
  },
  // iconWrapper: {
  //   backgroundColor: "#333",
  //   padding: 10,
  //   borderRadius: 12, 
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 4,
  //   elevation: 5, 
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
