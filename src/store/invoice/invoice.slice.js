import { createSlice } from "@reduxjs/toolkit";

export const { actions: invoiceActions, reducer: invoiceReducer } = createSlice(
  {
    name: "invoice",
    initialState: {
      isLoading: false,
      isError: false,
      token: localStorage.getItem("token") || "",
      userId: localStorage.getItem("userId") || "",
      userLogin: localStorage.getItem("login") || false,
      allInvoice: [],
      invoiceItem: [],
    },
    reducers: {
      setError: (state, { payload }) => {
        state.isError = payload;
      },
      setLoading: (state, { payload }) => {
        state.isLoading = payload;
      },
      setToken: (state, { payload }) => {
        state.token = payload;
      },
      setUserId: (state, { payload }) => {
        state.userId = payload;
      },
      setUserLogin: (state, { payload }) => {
        state.userLogin = payload;
      },
      setAllInvoice: (state, { payload }) => {
        state.allInvoice = payload;
      },
      setInvoiceItem: (state, { payload }) => {
        state.invoiceItem = payload;
      },
    },
  }
);
