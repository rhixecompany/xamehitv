import axios from "axios";

const API_URL = "/api/movies/";

// Create new movie
const createMovie = async (movieData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, movieData, config);

  return response.data;
};

// get movies
const getMovies = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete movie
const deleteMovie = async (movieId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + movieId, config);

  return response.data;
};

const movieService = {
  createMovie,
  getMovies,
  deleteMovie,
};

export default movieService;
