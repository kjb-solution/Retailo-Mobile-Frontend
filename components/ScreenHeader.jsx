import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";

const ScreenHeader = ({ children, title }) => {
  return (
    <View style={styles.HeaderContainer}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <View>{children}</View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
  },
});
