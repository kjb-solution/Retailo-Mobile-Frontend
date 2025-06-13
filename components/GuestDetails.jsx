import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import ThemedText from "./ThemedText";
import { useState } from "react";
import ThemedDropDown from "./ThemedDropDown";

const GuestDetails = ({ handleDrawerLogic }) => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [NC, setNC] = useState("Select");
  const [bankAmount, setBankAmount] = useState("");
  const [discountType, setDiscountType] = useState("Select Discount");
  const [pin, setPin] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {["NC", "Discount", "Split"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.headerItem,
              selectedTab === item && styles.selectedHeaderItem,
            ]}
            onPress={() => setSelectedTab(item)}
          >
            <ThemedText style={styles.headerItemText}>{item}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentPlaceholder}>
        {selectedTab === null && (
          <View style={styles.placeholderContainer}>
            <ThemedText style={styles.placeholderText}>
              Select a tab to view details
            </ThemedText>
          </View>
        )}
        {selectedTab === "NC" && (
          <View>
            <View style={styles.inputRow}>
              <Text style={styles.inputLabel}>PIN</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Enter PIN"
                keyboardType="numeric"
                value={pin}
                onChangeText={setPin}
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={styles.inputLabel}>NC</Text>
              <View style={styles.inlineRow}>
                <ThemedDropDown
                  selectedValue={NC}
                  onValueChange={setNC}
                  items={[
                    { label: "Select", value: "Select", enabled: false },
                    { label: "Bank 1", value: "Bank 1" },
                    { label: "Bank 2", value: "Bank 2" },
                  ]}
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                />
              </View>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  handleDrawerLogic();
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => {
                  handleDrawerLogic();
                }}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {selectedTab === "Discount" && (
          <View>
            <View style={styles.inputRow}>
              <Text style={styles.inputLabel}>PIN</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Enter PIN"
                keyboardType="numeric"
                value={pin}
                onChangeText={setPin}
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={styles.inputLabel}>Disc %</Text>
              <View style={styles.inlineRow}>
                <ThemedDropDown
                  selectedValue={discountType}
                  onValueChange={setDiscountType}
                  items={[
                    {
                      label: "Select Discount",
                      value: "Select Discount",
                      enabled: false,
                    },
                    { label: "5 %", value: "5%" },
                    { label: "10 %", value: "10%" },
                    { label: "15 %", value: "15%" },
                    { label: "20 %", value: "20%" },
                  ]}
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                />
              </View>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  handleDrawerLogic();
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => {
                  handleDrawerLogic();
                }}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default GuestDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f8f8f8",
    padding: 10,
  },
  // sectionTitle: {
  //   fontSize: 25,
  //   fontWeight: "bold",
  //   marginBottom: 15,
  //   color: "#333",
  // },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 18,
    color: "#999",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    padding: 5,
    marginBottom: 20,
  },
  headerItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginHorizontal: 3,
    backgroundColor: "#bdbdbd",
    borderRadius: 5,
  },
  selectedHeaderItem: {
    backgroundColor: "#4a5568",
  },
  headerItemText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
  contentPlaceholder: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 200,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    height: 40,
  },
  inputLabel: {
    width: 60,
    fontSize: 16,
    color: "#555",
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
  },
  inlineRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 60,
  },

  pickerItem: {
    color: "#333",
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    gap: 10,
  },
  cancelButton: {
    backgroundColor: "#bdbdbd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  applyButton: {
    backgroundColor: "#4a5568",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
