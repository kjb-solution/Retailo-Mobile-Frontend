import { useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ThemedText from "../../components/ThemedText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Drawer from "../../components/Drawer";
import PaymentSplitComponent from "../../components/PaymentSplitComponent";
import GuestDetails from "../../components/GuestDetails";

const InvoiceFooter = ({ grandTotal, selectedPayment, setSelectedPayment }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPaymentSplitComponentOpen, setIsPaymentSplitComponentOpen] =
    useState(false);
  const [isGuestDetailsOpen, setIsGuestDetailsOpen] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  const handleDrawerLogic = (screenName = "closeDrawer") => {
    if (screenName === "PaymentSplitComponent") {
      setIsGuestDetailsOpen(false);
      setIsPaymentSplitComponentOpen(true);
      setIsDrawerOpen(true);
    } else if (screenName === "GuestDetails") {
      setIsPaymentSplitComponentOpen(false);
      setIsGuestDetailsOpen(true);
      setIsDrawerOpen(true);
    } else {
      setIsDrawerOpen(false);
      setIsGuestDetailsOpen(false);
      setIsPaymentSplitComponentOpen(false);
    }
  };

  return (
    <View style={{ paddingBottom: 20 }}>
      <View style={styles.row}>
        <ThemedText style={styles.text}>CGST/SGST</ThemedText>
        <ThemedText style={styles.text}>₹11.20/11.20</ThemedText>
      </View>
      <View style={styles.row}>
        <ThemedText style={styles.text}>Net</ThemedText>
        <ThemedText style={styles.text}>₹24.06</ThemedText>
      </View>
      <View style={styles.row}>
        <ThemedText style={styles.text}>Qty</ThemedText>
        <ThemedText style={styles.text}>2</ThemedText>
      </View>
      <View style={styles.totalRow}>
        <ThemedText style={styles.textTotal}>Total Payment</ThemedText>
        <ThemedText style={styles.textTotal}>
          ₹{grandTotal.toFixed(2)}
        </ThemedText>
      </View>

      <View style={styles.PaymentMethodCards}>
        {["Cash", "UPI", "Card", "Others"].map((method) => (
          <Pressable
            key={method}
            onPress={() => {
              setSelectedPayment(method);
              if (method === "Others") {
                setIsDrawerOpen(true);
                handleDrawerLogic("PaymentSplitComponent");
              }
            }}
            style={[
              styles.card,
              selectedPayment === method
                ? { backgroundColor: "#233250" }
                : { backgroundColor: "#f5f5f5" },
            ]}
          >
            {method === "Cash" && (
              <MaterialCommunityIcons
                name="cash"
                size={24}
                color={selectedPayment === method ? "#fff" : "#233250"}
              />
            )}
            {method === "UPI" && (
              <MaterialIcons
                name="qr-code-scanner"
                size={22}
                color={selectedPayment === method ? "#fff" : "#233250"}
              />
            )}
            {method === "Card" && (
              <Ionicons
                name="card-sharp"
                size={20}
                color={selectedPayment === method ? "#fff" : "#233250"}
              />
            )}
            <ThemedText
              style={[
                styles.cardText,
                selectedPayment === method
                  ? { color: "#fff" }
                  : { color: "#233250" },
              ]}
            >
              {method}
            </ThemedText>
          </Pressable>
        ))}
      </View>
      <Drawer
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        title={isGuestDetailsOpen ? "Guest Details" : ""}
      >
        {/* Drawer with GuestDetailsComponent as child */}
        {isGuestDetailsOpen && (
          <GuestDetails handleDrawerLogic={handleDrawerLogic} />
        )}

        {/* Drawer with PaymentSplitComponent as child */}
        {isPaymentSplitComponentOpen && (
          <PaymentSplitComponent handleDrawerLogic={handleDrawerLogic} />
        )}
      </Drawer>

      <View style={styles.saveContainer}>
        <TouchableOpacity
          style={[styles.saveButton, isLoading && { opacity: 0.6 }]}
          onPress={handleSave}
          disabled={isLoading}
        >
          <FontAwesome name="save" size={24} color="white" />
          <ThemedText style={styles.saveText}>
            {isLoading ? "Saving..." : "Save"}
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.MoreButton]}
          onPress={() => {
            handleDrawerLogic("GuestDetails");
          }}
        >
          <ThemedText style={styles.moreText}>More</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InvoiceFooter;

// Styles remain unchanged
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderTopColor: "#000",
    borderTopWidth: 2,
    borderStyle: "dotted",
  },
  text: {
    fontSize: 16,
  },
  textTotal: {
    fontWeight: "700",
    fontSize: 20,
  },
  PaymentMethodCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  card: {
    backgroundColor: "#eeeee",
    padding: 5,
    margin: 5,
    borderColor: "#000",
    flexDirection: "row",
    gap: 8,
    borderWidth: 1,
    borderRadius: 8,
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
  },
  saveContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  saveButton: {
    backgroundColor: "#233250",
    padding: 10,
    height: 50,
    borderRadius: 8,
    margin: 5,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  saveText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  MoreButton: {
    backgroundColor: "#F45050",
    padding: 10,
    borderRadius: 5,
    height: 40,
    margin: 5,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  moreText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
