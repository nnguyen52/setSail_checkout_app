import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    email: "",
    newPassword: "",
    fullName: "",
    address: "",
    country: "",
    city: "",
    state_province: "",
    postalCode: "",
    agreeToTerms: false,
    isCheckingOut: false,
    success: false,
  },
  reducers: {
    currentUser(state) {
      return { ...state };
    },
    createNewUser(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    agreeToTermsToggle(state) {
      return {
        ...state,
        agreeToTerms: !state.agreeToTerms,
      };
    },
    checkingOut(state) {
      return {
        ...state,
        isCheckingOut: !state.isCheckingOut,
      };
    },
    successfulCheckout(state) {
      return {
        ...state,
        success: true,
      };
    },
    resetCheckout(state) {
      return {
        ...state,
        email: "",
        newPassword: "",
        fullName: "",
        address: "",
        country: "",
        city: "",
        state_province: "",
        postalCode: "",
        agreeToTerms: false,
        success: false,
      };
    },
  },
});
export const {
  currentUser,
  createNewUser,
  agreeToTermsToggle,
  successfulCheckout,
  resetCheckout,
  checkingOut,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
