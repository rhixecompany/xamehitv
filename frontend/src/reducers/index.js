import { combineReducers } from "redux";

import authReducer from "../features/auth/authSlice";
import movieReducer from "../features/movies/movieSlice";

export default combineReducers({
  auth: authReducer,
  movies: movieReducer,
});
