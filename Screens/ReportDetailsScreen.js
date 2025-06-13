import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ReportDetailsScreen({ route }) {
  const { report } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{report.name}</Text>

        <Text style={styles.label}>Billing Method</Text>
        <Text style={styles.value}>{report.billingMethod}</Text>

        <Text style={styles.label}>Amount</Text>
        <Text style={styles.value}>{report.amount}</Text>

        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>{report.date}</Text>

        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{report.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
});
