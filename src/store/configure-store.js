import { configureStore } from "@reduxjs/toolkit";
import { invoiceReducer } from "./invoice/invoice.slice";
export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});
