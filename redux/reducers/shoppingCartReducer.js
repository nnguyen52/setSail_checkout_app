import { createSlice } from "@reduxjs/toolkit";
import * as data from "../../data";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    sum: 0,
    discount: true,
    subTotal: 0,
    total: 0,
    products: [],
    discountAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      return {
        ...state,
        products: state.products.concat(action.payload),
        sum: state.sum + action.payload.price,
        subTotal: state.sum + action.payload.price,
        total: state.sum + action.payload.price,
      };
    },
    removeFromCart(state, action) {
      return {
        ...state,
        products: state.products.filter((e) => e.name != action.payload.name),
        sum: state.sum - action.payload.price,
        subTotal: state.sum - action.payload.price,
        total: state.sum - action.payload.price,
      };
    },
    allowDiscount(state) {
      return {
        ...state,
        discount: true,
      };
    },
    discount(state) {
      return {
        ...state,
        discount: true,
        subTotal: state.sum - (state.sum * data.discount) / 100,
        total: state.sum - (state.sum * data.discount) / 100,
        discountAmount: (state.sum * data.discount) / 100,
      };
    },
    loseDiscount(state) {
      return {
        ...state,
        discount: false,
        discountAmount: 0,
        subTotal: state.sum,
        total: state.sum,
      };
    },
    resetShoppingCart(state) {
      return {
        ...state,
        sum: 0,
        discount: true,
        subTotal: 0,
        total: 0,
        products: [],
        discountAmount: 0,
      };
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  discount,
  loseDiscount,
  allowDiscount,
  resetShoppingCart,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
