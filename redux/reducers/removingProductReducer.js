import { createSlice } from "@reduxjs/toolkit";

const removingProductSlice = createSlice({
  name: "removingProductSlice",
  initialState: {
    product: null,
    openModal: false,
  },
  reducers: {
    createRemovingProduct(state, action) {
      return {
        ...state,
        product: action.payload,
        openModal: true,
      };
    },
    clearRemovingProduct(state) {
      return {
        product: null,
        openModal: false,
      };
    },
    resetRemovingProduct(state) {
      return {
        ...state,
        product: null,
        openModal: false,
      };
    },
  },
});
export const {
  createRemovingProduct,
  clearRemovingProduct,
  resetRemovingProduct,
} = removingProductSlice.actions;
export default removingProductSlice.reducer;
