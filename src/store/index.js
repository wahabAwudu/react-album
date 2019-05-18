import { createStore, combineReducers } from "redux";
import userReducer from "./user";
import postsReducer from "./posts";

const store = createStore(combineReducers({ userReducer, postsReducer }));
// store.subscribe(() => {});

export default store;
