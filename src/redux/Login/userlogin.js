import { createSlice } from "@reduxjs/toolkit";

export const userlogin = createSlice({
  name: "cart",
  initialState: {
    value: false,
  },
  reducers: {
    logintrue: (state) => {
      state.value = true;
    },
    loginfalse: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logintrue, loginfalse } = userlogin.actions;

export default userlogin.reducer;
