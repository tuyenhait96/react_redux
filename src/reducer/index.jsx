import { combineReducers } from "redux";
import productReducer from "./productReducer";

const appReducers = combineReducers({
  productReducer,
});

export default appReducers;
