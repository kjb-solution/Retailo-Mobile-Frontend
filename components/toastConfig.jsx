// ToastConfig.js
import { View, Text, StyleSheet } from "react-native";

const STATUS_COLORS = {
  success: "#4BB543",
  error: "#FF4C4C",
  info: "#3B82F6",
};

export const toastConfig = {
  success: ({ text1 }) => (
    <View style={[styles.container]}>
      <Text style={[styles.text, { color: STATUS_COLORS.success }]}>
        {text1}
      </Text>
    </View>
  ),
  error: ({ text1 }) => (
    <View style={[styles.container]}>
      <Text style={[styles.text, { color: STATUS_COLORS.error }]}>{text1}</Text>
    </View>
  ),
  info: ({ text1 }) => (
    <View style={[styles.container]}>
      <Text style={[styles.text, { color: STATUS_COLORS.info }]}>{text1}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
    marginBottom: 30,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
