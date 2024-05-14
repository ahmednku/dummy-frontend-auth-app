import productReducer from "./productSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
