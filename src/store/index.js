import { createStore, applyMiddleware, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";
import artists from "./artists";
import mode from "./mode";
import currArtist from "./currArtist";
import skills from "./skills";

const reducer = combineReducers({
  artists,
  skills,
  currArtist,
  mode,
});

const store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
