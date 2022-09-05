const axios = require("axios");
const cheerio = require("cheerio");
const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

const url = process.env.URL;

// @route GET /api/movies/:id
// @access Private
const getMovies = asyncHandler(async (req, res) => {
  const movie = await Movie.find();
  if (!movie) {
    res.status(400);
    throw new Error("Movies not found");
  }
  res.status(200).json(movie);
});

// @desc Get Movies
// @route GET /api/movies
// @access Private
const loadMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find();
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      $(".file-one", html).each((i, el) => {
        const title = $(el).find("a").text();
        const image = $(el).find("img").attr("src");
        const movies = Movie.create({
          title,
          image,
        });
      });
      res.status(200).json(movies);
    })
    .catch((err) => console.log(err));
});

// @desc Create Movie
// @route POST /api/movies/
// @access Private
const addMovie = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const movie = await Movie.create({
    title: req.body.title,
  });

  res.status(200).json(movie);
});

// @desc Update Movies
// @route PUT /api/movies/:id
// @access Private
const updateMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    res.status(400);
    throw new Error("Movie not found");
  }

  const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedMovie);
});

// @desc Get Movies
// @route GET /api/movies/:id
// @access Private
const getMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    res.status(400);
    throw new Error("Movie not found");
  }
  res.status(200).json(movie);
});

// @desc Delete Movies
// @route DELETE /api/movies/:id
// @access Private
const deleteMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    res.status(400);
    throw new Error("Movie not found");
  }

  await movie.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMovies,
  loadMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie,
};
