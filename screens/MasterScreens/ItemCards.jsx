import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import DeleteModal from "../../components/DeleteModel";
import ThemedText from "../../components/ThemedText";

const ItemTable = ({
  items,
  setItems,
  setUpdateItem,
  setIsDrawerOpen,
  isDrawerOpen,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [expandedItemId, setExpandedItemId] = useState(null); // NEW

  const handleDelete = () => {
    const updatedItems = items.filter((item) => item.id !== deleteItemId);
    setItems(updatedItems);
    setDeleteItemId(null);
  };

  const toggleExpand = (id) => {
    setExpandedItemId((prev) => (prev === id ? null : id));
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedItemId === item.id;

    return (
      <Pressable onPress={() => toggleExpand(item.id)} style={styles.listItem}>
        <View style={styles.cardHeader}>
          <ThemedText style={styles.itemName} numberOfLines={3}>
            {item.id}. {item.itemName}
          </ThemedText>
          <ThemedText style={styles.cardText}>Rate: ₹{item.rate}</ThemedText>
          <ThemedText style={styles.cardText}>Group: {item.group}</ThemedText>
        </View>

        {isExpanded && (
          <View style={styles.cardContent}>
            <View style={styles.cardRow}>
              <ThemedText style={styles.cardLabel}>Category:</ThemedText>
              <ThemedText style={styles.cardText}>{item.category}</ThemedText>
            </View>
            <View style={styles.cardRow}>
              <ThemedText style={styles.cardLabel}>Item Code:</ThemedText>
              <ThemedText style={styles.cardText}>{item.itemCode}</ThemedText>
            </View>
            <View style={styles.cardRow}>
              <ThemedText style={styles.cardLabel}>UOM:</ThemedText>
              <ThemedText style={styles.cardText}>{item.uom}</ThemedText>
            </View>
            <View style={styles.cardRow}>
              <ThemedText style={styles.cardLabel}>Re Rate:</ThemedText>
              <ThemedText style={styles.cardText}>₹{item.re_rate}</ThemedText>
            </View>
          </View>
        )}

        <View style={styles.actionIcons}>
          <Pressable
            onPress={() => {
              setUpdateItem(item);
              setIsDrawerOpen(!isDrawerOpen);
            }}
          >
            <MaterialIcons name="edit" size={24} color="#233250" />
          </Pressable>
          <Pressable
            onPress={() => {
              setDeleteItemId(item.id);
              setShowDeleteModal(true);
            }}
          >
            <MaterialIcons name="delete" size={24} color="red" />
          </Pressable>
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
        renderItem={renderItem}
      />

      <DeleteModal
        visible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          handleDelete();
          setShowDeleteModal(false);
        }}
      />
    </>
  );
};

export default ItemTable;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardLabel: {
    fontSize: 14,
    color: "#233250",
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
    width: 100, // align labels
  },

  cardHeader: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#233250",
    fontFamily: "Poppins-Regular",
  },
  cardContent: {
    gap: 8,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Poppins-Regular",
  },
  actionIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 15,
    gap: 15,
  },
});
