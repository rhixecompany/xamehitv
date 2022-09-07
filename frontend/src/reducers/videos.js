import {
  GET_VIDEOS,
  DELETE_VIDEO,
  ADD_VIDEO,
  CLEAR_VIDEOS,
} from "../actions/types.js";

const initialState = {
  videos: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    case DELETE_VIDEO:
      return {
        ...state,
        videos: state.videos.filter((video) => video.id !== action.payload),
      };
    case ADD_VIDEO:
      return {
        ...state,
        videos: [...state.videos, action.payload],
      };
    case CLEAR_VIDEOS:
      return {
        ...state,
        videos: [],
      };
    default:
      return state;
  }
}
