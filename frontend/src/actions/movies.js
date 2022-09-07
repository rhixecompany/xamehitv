import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { GET_MOVIES, GET_MOVIE, DELETE_MOVIE, ADD_MOVIE } from "./types";
import { tokenConfig } from "./auth";

// GET GET_MOVIES
export const getMovies = () => (dispatch, getState) => {
  axios
    .get("/api/movies/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_MOVIES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// GET MOVIE
export const getMovie = (_id) => (dispatch, getState) => {
  axios
    .get(`/api/movies/${_id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ getMovie: "Movie Info" }));
      dispatch({
        type: GET_MOVIE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE MOVIE
export const deleteMovie = (_id) => (dispatch, getState) => {
  axios
    .delete(`/api/movies/${_id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteMovie: "Movie Deleted" }));
      dispatch({
        type: DELETE_MOVIE,
        payload: _id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD MOVIE
export const addMovie = (movie) => (dispatch, getState) => {
  axios
    .post("/api/movies/", movie, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addMovie: "Movie Added" }));
      dispatch({
        type: ADD_MOVIE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
