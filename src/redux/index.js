import { configureStore } from "@reduxjs/toolkit";


import productSlice from "./productSlice";
import userSlice from "./userSlice";


export const store = configureStore({
  reducer: {
    user : userSlice,
    product : productSlice
    
  },
});