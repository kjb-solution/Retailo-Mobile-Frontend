import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Formik } from "formik";
import { ItemFormValidationSchema } from "./ItemFormValidationSchema";
import ThemedInputWithLabel from "../../components/ThemedInputWithLabel";
import ThemedDropDownWithLabel from "../../components/ThemedDropDownWithLabel";
import ThemedButton from "../../components/ThemedButton";
import ThemedCancelButton from "../../components/ThemedCancelButton";
import Toast from "react-native-toast-message";

const masterGroup = ["Restaurant", "Tea shop", "Bakery", "Gym", "Spa"];
const categories = ["Omelette", "Chicken Tandoori", "Grill Chicken"];
const group = ["Veg", "Non Veg", "Sea Food"];
const departments = ["Front Office", "Main Kitchen", "Bakery"];
const UOM = ["ml", "kg", "nos", "plate", "pack"];
const status = ["Active", "Inactive"];

const CreateItemForm = ({
  setIsDrawerOpen,
  setItems,
  items,
  updateItem,
  setUpdateItem,
}) => {
  const defaultValues = {
    masterGroup: "",
    category: "",
    group: "",
    department: "",
    itemCode: "",
    itemName: "",
    rate: "",
    re_rate: "",
    onlineRate: "",
    uom: "",
    estimateTime: "",
    status: "",
  };
  const updateValues = {
    masterGroup: updateItem?.masterGroup ?? "",
    category: updateItem?.category ?? "",
    group: updateItem?.group ?? "",
    department: updateItem?.department ?? "",
    itemCode: updateItem?.itemCode ?? "",
    itemName: updateItem?.itemName ?? "",
    rate: updateItem?.rate ?? "",
    re_rate: updateItem?.re_rate ?? "",
    onlineRate: updateItem?.onlineRate ?? "",
    uom: updateItem?.uom ?? "",
    estimateTime: updateItem?.estimateTime ?? "",
    status: updateItem?.status ?? "",
  };

  return (
    <Formik
      initialValues={updateItem != null ? updateValues : defaultValues}
      validationSchema={ItemFormValidationSchema}
      onSubmit={(values) => {
        if (updateItem) {
          setItems(
            items.map((item) =>
              item.id === updateItem.id
                ? { ...values, id: updateItem.id }
                : item
            )
          );
          setUpdateItem(null);
          Toast.show({
            type: "success",
            text1: `${values.itemName} updated`,
            position: "bottom",
            visibilityTime: 2000,
          });
        } else {
          const newItem = {
            ...values,
            id: Date.now().toString(),
          };
          setItems([...items, newItem]);
          Toast.show({
            type: "success",
            text1: `${values.itemName} added`,
            position: "bottom",
            visibilityTime: 2000,
          });
        }
        setIsDrawerOpen(false);
      }}
    >
      {({ handleSubmit, errors, touched, resetForm }) => (
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.formContainer}>
              <ThemedDropDownWithLabel
                label="Master Group"
                name="masterGroup"
                placeholder="Select"
                items={masterGroup.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
              <ThemedDropDownWithLabel
                label="Category"
                name="category"
                placeholder="Select"
                items={categories.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
              <ThemedDropDownWithLabel
                label="Group"
                name="group"
                placeholder="Select"
                items={group.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
              <ThemedDropDownWithLabel
                label="Department"
                name="department"
                placeholder="Select"
                items={departments.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
              <ThemedDropDownWithLabel
                label="UOM"
                name="uom"
                placeholder="Select"
                items={UOM.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
              <ThemedInputWithLabel
                name="itemCode"
                label="Item Code"
                placeholder="Item Code"
                styleStatus={touched.itemCode && errors.itemCode}
                errorMessage={errors.itemCode}
              />
              <ThemedInputWithLabel
                name="itemName"
                label="Item Name"
                placeholder="Item Name"
                styleStatus={touched.itemName && errors.itemName}
                errorMessage={errors.itemName}
              />
              <ThemedInputWithLabel
                name="rate"
                label="Rate"
                placeholder="Rate"
                styleStatus={touched.rate && errors.rate}
                errorMessage={errors.rate}
              />
              <ThemedInputWithLabel
                name="re_rate"
                label="Re-Rate"
                placeholder="Re-Rate"
                styleStatus={touched.re_rate && errors.re_rate}
                errorMessage={errors.re_rate}
              />
              <ThemedInputWithLabel
                name="onlineRate"
                label="Online Rate"
                placeholder="Online Rate"
                styleStatus={touched.onlineRate && errors.onlineRate}
                errorMessage={errors.onlineRate}
              />
              <ThemedInputWithLabel
                name="estimateTime"
                label="Estimate Time"
                placeholder="Estimate Time"
                styleStatus={touched.estimateTime && errors.estimateTime}
                errorMessage={errors.estimateTime}
              />
              <ThemedDropDownWithLabel
                label="Status"
                name="status"
                placeholder="Select"
                items={status.map((item) => ({
                  label: item,
                  value: item,
                }))}
                styleStatus={touched.status && errors.status}
                errorMessage={errors.status}
              />
            </View>

            <View style={styles.buttonContainer}>
              <ThemedCancelButton
                text="Cancel"
                onPress={() => {
                  resetForm();
                  setIsDrawerOpen(false);
                  setUpdateItem(false);
                }}
              />
              <ThemedButton
                text={updateItem ? "Update" : "Submit"}
                onPress={handleSubmit}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default CreateItemForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  formContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
});
