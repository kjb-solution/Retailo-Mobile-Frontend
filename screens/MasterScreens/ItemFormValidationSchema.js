import * as Yup from "yup";

export const ItemFormValidationSchema = Yup.object().shape({
  itemCode: Yup.string().required("item Code is required"),
  itemName: Yup.string().required("item Name is required"),
  rate: Yup.string().required("Rate is required"),
  re_rate: Yup.string().required("Re-Rate is required"),
  onlineRate: Yup.string().required("Online Rate is required"),
  estimateTime: Yup.string().required("Estimate Time is required"),
  uom: Yup.string().required("UOM is required"),
  masterGroup: Yup.string().required("Master Group is required"),
  category: Yup.string().required("Category is required"),
  group: Yup.string().required("Group is required"),
  department: Yup.string().required("Department is required"),
  status: Yup.string().required("Status is required"),
});
