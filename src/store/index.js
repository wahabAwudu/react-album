import { createStore, combineReducers } from "redux";
import userReducer from "./user";
import postsReducer from "./posts";
import photosReducer from "./photos";

const store = createStore(
  combineReducers({
    userReducer,
    postsReducer,
    photosReducer
  })
);
// store.subscribe(() => {});

export default store;
