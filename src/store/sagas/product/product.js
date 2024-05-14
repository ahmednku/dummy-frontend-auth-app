import { takeLatest } from "redux-saga/effects";

function* addToCartWorker(action) {
  const config = {
    method: "post",
    url: "/cart/add",
  };
  console.log(config, action, "added to cart");
  yield 1;
}

function* addToCartWatcher() {
  yield takeLatest("ADD_TO_CART", addToCartWorker);
}

export default addToCartWatcher;
