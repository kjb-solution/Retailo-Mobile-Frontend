import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import ScreenHeader from "../../components/ScreenHeader";
import ThemedButton from "../../components/ThemedButton";
import Drawer from "../../components/Drawer";
import CreateItemForm from "./CreateItemForm";
import ItemTable from "./ItemTable";
import ItemCards from "./ItemCards";

const Master = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [updateItem, setUpdateItem] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      category: "Omelette",
      department: "main kitchen",
      estimateTime: "55",
      group: "Veg",
      itemCode: "1",
      itemName: "CHICKEN OMELETTE",
      masterGroup: "Tea shop",
      onlineRate: "55",
      rate: "180",
      re_rate: "0",
      status: "Active",
      uom: "nos",
    },
  ]);
  useEffect(() => {
    !isDrawerOpen && setUpdateItem(null);
  }, [isDrawerOpen]);

  return (
    <View style={{ flex: 1 }}>
      <ScreenHeader title="Item Master">
        <ThemedButton
          onPress={() => setIsDrawerOpen(!isDrawerOpen)}
          text="Create"
        />
      </ScreenHeader>

      <Drawer
        title={updateItem ? "Update Item" : "Create Item"}
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
      >
        <CreateItemForm
          setIsDrawerOpen={setIsDrawerOpen}
          setItems={setItems}
          items={items}
          updateItem={updateItem}
          setUpdateItem={setUpdateItem}
        />
      </Drawer>

      <ItemTable
        items={items}
        setItems={setItems}
        setUpdateItem={setUpdateItem}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <ItemCards
        items={items}
        setItems={setItems}
        setUpdateItem={setUpdateItem}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </View>
  );
};

export default Master;

const styles = StyleSheet.create({});
