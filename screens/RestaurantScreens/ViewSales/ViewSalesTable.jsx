import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const ViewSalesTable = () => {
  const tableHead = [
    "Head1",
    "Head2",
    "Head3",
    "Head4",
    "Head5",
    "Head6",
    "Head7",
    "Head8",
  ];
  const tableData = [
    ["1", "2", "3", "4", "5", "6", "7", "8"],
    ["a", "b", "c", "d", "e", "f", "g", "h"],
    ["1", "2", "3", "456\n789", "5", "6", "7", "8"],
    ["a", "b", "c", "d", "e", "f", "g", "h"],
    ["1", "2", "3", "4", "5", "6", "7", "8"],
    ["a", "b", "c", "d", "e", "f", "g", "h"],
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <ScrollView>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#c8e1ff" }}>
              <Row
                data={tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={tableData} textStyle={styles.text} />
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  head: {
    // height: 40,
    backgroundColor: "#f1f8ff",
  },
  text: {
    // margin: 6,
    // fontSize: 14,
  },
});

export default ViewSalesTable;
