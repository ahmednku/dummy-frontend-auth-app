import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import userReducer from "./userSlice";
import { api } from "../../services/api";

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
