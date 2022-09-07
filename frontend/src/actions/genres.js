import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { GET_VIDEOS, DELETE_VIDEO, ADD_VIDEO } from "./types";
import { tokenConfig } from "./auth";

// GET GET_VIDEOS
export const getVideos = () => (dispatch, getState) => {
  axios
    .get("/api/series/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_VIDEOS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE VIDEO
export const deleteVideo = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/series/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteVideo: "Video Deleted" }));
      dispatch({
        type: DELETE_VIDEO,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD VIDEO
export const addVideo = (video) => (dispatch, getState) => {
  axios
    .post("/api/series/", video, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addVideo: "Video Added" }));
      dispatch({
        type: ADD_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
