import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Table, Row } from "react-native-table-component";
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

  const tableHead = [
    "S.No",
    "Group",
    "Category",
    "Code",
    "Item Name",
    "UOM",
    "Rate",
    "P.Rate",
    "Actions",
  ];

  const widthArr = [60, 90, 110, 70, 180, 70, 80, 80, 100];

  const handleDelete = () => {
    const updatedItems = items.filter((item) => item.id !== deleteItemId);
    setItems(updatedItems);
    setDeleteItemId(null);
  };

  const tableData = items.map((item, index) => [
    index + 1,
    item.group,
    item.category,
    item.itemCode,
    item.itemName,
    item.uom,
    item.rate,
    item.re_rate,
    <View style={styles.actionIcons} key={`actions-${item.id}`}>
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
    </View>,
  ]);

  return (
    <>
      <ScrollView horizontal style={styles.scrollContainer}>
        <View style={styles.tableContainer}>
          <Table borderStyle={styles.table}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headText}
              widthArr={widthArr}
            />
            {tableData.map((rowData, index) => (
              <Row
                key={index}
                data={rowData}
                widthArr={widthArr}
                style={[
                  styles.row,
                  index % 2 === 0 ? styles.evenRow : styles.oddRow,
                ]}
                textStyle={styles.rowText}
              />
            ))}
          </Table>
        </View>
      </ScrollView>

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
  scrollContainer: {
    flex: 1,
    height: "50%",
  },
  tableContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  table: {
    borderRadius: 10,
  },
  head: {
    height: 40,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  headText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontFamily: "Poppins-Regular",
  },
  row: {
    height: 50,
  },
  evenRow: {
    backgroundColor: "#f7f7f7", // Light gray
  },
  oddRow: {
    backgroundColor: "#fff", // White
  },
  rowText: {
    textAlign: "left",
    fontSize: 14,
    paddingLeft: 15,
    paddingVertical: 15,
    fontFamily: "Poppins-Regular",
  },
  actionIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
