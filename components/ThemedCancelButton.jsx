import { StyleSheet, Text, Pressable, View } from "react-native";
import { useState } from "react";
import ThemedText from "./ThemedText";

const ThemedCancelButton = (props) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      {...props}
      style={[styles.button, isPressed && styles.buttonPressed]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      {props.icon && props.icon}
      <ThemedText
        style={[styles.buttonText, isPressed && styles.buttonTextPressed]}
      >
        {props.text}
      </ThemedText>
    </Pressable>
  );
};

export default ThemedCancelButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#233250",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonPressed: {
    backgroundColor: "#233250",
    borderColor: "#233250",
  },
  buttonText: {
    color: "#233250",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextPressed: {
    color: "#fff",
  },
});
