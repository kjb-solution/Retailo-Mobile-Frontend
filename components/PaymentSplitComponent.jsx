import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const PaymentSplitComponent = ({ setIsDrawerOpen }) => {
  const [cash, setCash] = useState("");
  const [card, setCard] = useState("");
  const [bank, setBank] = useState("Select");
  const [room, setRoom] = useState("Select");
  const [creditText, setCreditText] = useState("");
  const [bankAmount, setBankAmount] = useState("");
  const [creditAmount, setCreditAmount] = useState("");
  const [roomAmount, setRoomAmount] = useState("");

  const total = 100;
  const balance = 100;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Total: <Text style={styles.amount}>₹{total}</Text>
            </Text>
            <Text style={styles.headerText}>
              Balance: <Text style={styles.amount}>₹{balance}</Text>
            </Text>
          </View>

          <View style={styles.form}>
            {/* Cash */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Cash</Text>
              <TextInput
                style={styles.input}
                placeholder="₹ Cash amount"
                value={cash}
                onChangeText={setCash}
                keyboardType="numeric"
              />
            </View>

            {/* Card */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Card</Text>
              <TextInput
                style={styles.input}
                placeholder="₹ Card amount"
                value={card}
                onChangeText={setCard}
                keyboardType="numeric"
              />
            </View>

            {/* Bank */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Bank</Text>
              <View style={styles.inlineRow}>
                <Picker
                  selectedValue={bank}
                  onValueChange={(itemValue) => setBank(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Select" value="Select" />
                  <Picker.Item label="Bank 1" value="Bank 1" />
                  <Picker.Item label="Bank 2" value="Bank 2" />
                </Picker>
                <TextInput
                  style={styles.inlineInput}
                  placeholder="₹ Amount"
                  value={bankAmount}
                  onChangeText={setBankAmount}
                  keyboardType="numeric"
                />
              </View>
            </View>

            {/* Credit */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Credit</Text>
              <View style={styles.inlineRow}>
                <TextInput
                  style={styles.inlineInput}
                  placeholder="Credit"
                  value={creditText}
                  onChangeText={setCreditText}
                />
                <TextInput
                  style={styles.inlineInput}
                  placeholder="₹ Amount"
                  value={creditAmount}
                  onChangeText={setCreditAmount}
                  keyboardType="numeric"
                />
              </View>
            </View>

            {/* Room */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Room</Text>
              <View style={styles.inlineRow}>
                <Picker
                  selectedValue={room}
                  onValueChange={(itemValue) => setRoom(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Select" value="Select" />
                  <Picker.Item label="ROM 1" value="ROM 1" />
                  <Picker.Item label="ROM 2" value="ROM 2" />
                </Picker>
                <TextInput
                  style={styles.inlineInput}
                  placeholder="₹ Amount"
                  value={roomAmount}
                  onChangeText={setRoomAmount}
                  keyboardType="numeric"
                />
              </View>
            </View>

            {/* Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => {setIsDrawerOpen(false)}}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitButton}  onPress={() => {setIsDrawerOpen(false)}}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  amount: {
    fontWeight: "bold",
  },
  form: {
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  inlineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  picker: {
    flex: 1.1,
    backgroundColor: "#f9f9f9",
    height: 50,
    justifyContent: "center",
    fontSize: 10,
  },
  inlineInput: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  cancelButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: "#2c3e50",
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
  },
  submitButton: {
    flex: 1,
    padding: 12,
    backgroundColor: "#2c3e50",
    borderRadius: 8,
    marginLeft: 10,
    alignItems: "center",
  },
  cancelText: {
    color: "#2c3e50",
    fontWeight: "600",
  },
  submitText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default PaymentSplitComponent;
