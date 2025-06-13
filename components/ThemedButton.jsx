import { StyleSheet, Text, Pressable, View } from "react-native";
import { useState } from "react";
import ThemedText from "./ThemedText";

const ThemedButton = (props) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      {...props}
      style={[styles.button, isPressed && styles.buttonPressed]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      {props.icon && props.icon}
      <ThemedText style={styles.buttonText}>{props.text}</ThemedText>
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#233250",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonPressed: {
    backgroundColor: "#34495e",
    opacity: 0.9,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
