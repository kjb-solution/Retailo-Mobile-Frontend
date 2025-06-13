import { StyleSheet, View, Platform } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";
import { useField } from "formik";
import { Picker } from "@react-native-picker/picker";

const ThemedDropDownWithLabel = ({
  label,
  name,
  items = [],
  placeholder,
  styleStatus,
  errorMessage,
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>{label}</ThemedText>

      <View
        style={[
          styles.pickerContainer,
          styleStatus === "false" && styles.invalid,
          meta.touched && meta.error && styles.invalid,
        ]}
      >
        <Picker
          selectedValue={field.value}
          onValueChange={(value) => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          mode="dropdown"
          style={styles.picker}
        >
          {placeholder && (
            <Picker.Item label={placeholder} value="" enabled={false} />
          )}
          {items.map(({ label, value }, index) => (
            <Picker.Item key={index} label={label} value={value} />
          ))}
        </Picker>
      </View>

      {meta.touched && meta.error && (
        <ThemedText style={styles.error}>
          {errorMessage || "Required"}
        </ThemedText>
      )}
    </View>
  );
};

export default ThemedDropDownWithLabel;

const styles = StyleSheet.create({
  container: {
    width: "48%",
  },
  label: {
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 2,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#000",
    marginVertical: 5,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  picker: {
    width: "100%",
    height: Platform.OS === "android" ? 50 : undefined,
    color: "#333",
    paddingHorizontal: 0,
    paddingVertical: 30,
  },
  invalid: {
    borderColor: "red",
  },
  error: {
    color: "red",
    fontSize: 10,
  },
});
