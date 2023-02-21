import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import productSlice from "./products/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});
