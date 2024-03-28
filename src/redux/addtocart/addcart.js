import { createSlice } from "@reduxjs/toolkit";

export const addcart = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtocart } = addcart.actions;

export default addcart.reducer;
