import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DeleteModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.headerText}>Delete</Text>
          <Text style={styles.bodyText}>
            Are you sure you want to delete this data?
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={onConfirm}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  cancelButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  cancelText: {
    fontWeight: "bold",
    color: "#333",
  },
  deleteButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#d9534f",
    borderRadius: 5,
  },
  deleteText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
