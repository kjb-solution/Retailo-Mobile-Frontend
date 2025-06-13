import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ScreenHeader from "../../../components/ScreenHeader";
import ThemedButton from "../../../components/ThemedButton";
import Feather from "@expo/vector-icons/Feather";
import Drawer from "../../../components/Drawer";
import ViewSalesTable from "./ViewSalesTable";

const ViewSales = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <View>
      <ScreenHeader title="View Sales">
        <ThemedButton
          onPress={() => setIsFilterOpen(!isFilterOpen)}
          text="Filter"
          icon={<Feather name="filter" size={20} color="white" />}
        />
      </ScreenHeader>
      <Drawer
        title="Filter"
        isOpen={isFilterOpen}
        setIsOpen={setIsFilterOpen}
      />

      <ViewSalesTable />
    </View>
  );
};

export default ViewSales;

const styles = StyleSheet.create({});
