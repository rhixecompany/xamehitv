import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { GET_PROFILES, DELETE_PROFILE, ADD_PROFILE } from "./types";
import { tokenConfig } from "./auth";

// GET GET_PROFILES
export const getProfiles = () => (dispatch, getState) => {
  axios
    .get("/api/profiles/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE PROFILE
export const deleteProfile = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/profiles/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteProfile: "Profile Deleted" }));
      dispatch({
        type: DELETE_PROFILE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD PROFILE
export const addProfile = (profile) => (dispatch, getState) => {
  axios
    .post("/api/profiles/", profile, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addProfile: "Profile Added" }));
      dispatch({
        type: ADD_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
