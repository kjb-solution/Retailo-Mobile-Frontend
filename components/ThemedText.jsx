import { StyleSheet, Text } from "react-native";

const ThemedText = (props) => {
  return (
    <Text {...props} style={[{ fontFamily: "Poppins-Regular" }, props.style]} />
  );
};

export default ThemedText;

const styles = StyleSheet.create({});
