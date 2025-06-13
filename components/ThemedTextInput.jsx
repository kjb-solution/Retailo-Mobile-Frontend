import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const ThemedTextInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      {...props}
      placeholder={props.placeholder}
    />
  );
};

export default ThemedTextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 5,
    width: "48%",
  },
});
