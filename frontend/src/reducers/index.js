import { combineReducers } from "redux";
import movies from "./movies";
import authReducer from "../features/auth/authSlice";

export default combineReducers({
  movies,
  auth: authReducer,
});
