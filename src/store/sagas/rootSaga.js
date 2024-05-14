import { all } from "redux-saga/effects";
import addToCartWatcher from "./product/product";

export default function* rootSaga() {
  yield all([addToCartWatcher()]);
}
