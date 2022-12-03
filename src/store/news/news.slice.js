import { createSlice } from "@reduxjs/toolkit";

export const { actions: newsActions, reducer: newsReducer } = createSlice({
  name: "news",
  initialState: {
    loading: false,
    error: null,
    newsList: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setNewsList: (state, action) => {
      state.newsList = action.payload;
    },
  },
});
