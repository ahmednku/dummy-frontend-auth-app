import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas/rootSaga.js";
import rootReducer from "./slices/rootReducer";
import { api } from "../services/api.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware).concat(api.middleware),
});
sagaMiddleware.run(mySaga);

export default store;
