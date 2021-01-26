import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import rootReducer from "../reducers";
import rootSaga from "../saga";

const logger = createLogger();
const saga = createSagaMiddleware();
let middlewares = [saga];
middlewares = [...middlewares, logger];

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middlewares)
);

saga.run(rootSaga);

export default store;
