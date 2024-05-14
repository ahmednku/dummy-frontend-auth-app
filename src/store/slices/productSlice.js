import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  price: 7,
  stockAvailable: 10,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.stockAvailable += action.payload;
    },
    decrement: (state, action) => {
      state.stockAvailable -= action.payload;
    },
  },
});

export const { increment, decrement } = productSlice.actions;

export default productSlice.reducer;
