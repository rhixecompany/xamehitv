import {
  GET_PROFILES,
  DELETE_PROFILE,
  ADD_PROFILE,
  CLEAR_PROFILES,
} from "../actions/types.js";

const initialState = {
  profiles: [],
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    case ADD_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    case CLEAR_PROFILES:
      return {
        ...state,
        profiles: [],
      };
    default:
      return state;
  }
}
