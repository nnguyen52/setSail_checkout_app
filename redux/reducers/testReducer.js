import { createSlice } from "@reduxjs/toolkit";
const testSlice = createSlice({
  name: "test",
  initialState: {
    value: "test",
  },
  reducers: {
    changeTestValue(state, action) {
      state.value = action.payload;
    },
  },
});
export const { changeTestValue } = testSlice.actions;
export default testSlice.reducer;
