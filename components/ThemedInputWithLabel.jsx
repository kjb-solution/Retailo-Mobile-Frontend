import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";
import { useField } from "formik";

const ThemedInputWithLabel = ({
  label,
  name,
  placeholder,
  styleStatus,
  errorMessage,
  onchangeText,
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <TextInput
        style={[
          styles.input,
          styleStatus === "false" && styles.invalid,
          meta.touched && meta.error && styles.invalid,
        ]}
        placeholder={placeholder}
        value={field.value}
        onChangeText={helpers.setValue}
        onBlur={() => helpers.setTouched(true)}
      />
      {meta.touched && meta.error && (
        <ThemedText style={styles.error}>
          {errorMessage || "Required"}
        </ThemedText>
      )}
    </View>
  );
};

export default ThemedInputWithLabel;

const styles = StyleSheet.create({
  container: {
    width: "48%",
  },
  label: {
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 2,
    borderRadius: 5,
    height: 50,
  },
  invalid: {
    borderColor: "red",
  },
  error: {
    color: "red",
    fontSize: 10,
  },
});
