import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./addtocart/addcart";
import userlogin from "./Login/userlogin";

export default configureStore({
  reducer: {
    cart: cartReducer,
    login: userlogin,
  },
});
