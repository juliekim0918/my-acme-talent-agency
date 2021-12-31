import { createStore, applyMiddleware, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";
import artists from "./artists";

const reducer = combineReducers({
  artists,
});

const store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
