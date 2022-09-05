const express = require("express");
const router = express.Router();
const {
  getMovies,
  loadMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

router.route("/load").get(loadMovies);

router.route("/").get(getMovies).post(addMovie);
router.route("/:id").get(getMovie).put(updateMovie).delete(deleteMovie);

module.exports = router;
