import {
  GET_MOVIES,
  DELETE_MOVIE,
  GET_MOVIE,
  ADD_MOVIE,
  CLEAR_MOVIES,
} from "../actions/types.js";

const initialState = {
  movies: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
      };
    default:
      return state;
  }
}
