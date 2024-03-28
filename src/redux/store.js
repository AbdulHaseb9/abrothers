import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./addtocart/addcart";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
