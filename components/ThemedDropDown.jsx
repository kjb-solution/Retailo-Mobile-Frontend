import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ThemedDropDown = ({
  selectedValue,
  onValueChange,
  items = [],
  style,
  itemStyle,
  pickerContainerStyle,
  ...props
}) => {
  return (
    <View style={[styles.pickerContainer, pickerContainerStyle]}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={[styles.picker, style]}
        itemStyle={[styles.pickerItem, itemStyle]}
        mode="dropdown"
        {...props}
      >
        {items.map(({ label, value }, index) => (
          <Picker.Item key={index} label={label} value={value} />
        ))}
      </Picker>
    </View>
  );
};

export default ThemedDropDown;

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1.2,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    height: 53,
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#333",
  },
  pickerItem: {
    color: "#333",
    fontSize: 16,
  },
});
