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

const { protect } = require("../middleware/authMiddleware");

router.route("/load").get(protect, loadMovies);

router.route("/").get(getMovies).post(protect, addMovie);
router
  .route("/:id")
  .get(getMovie)
  .put(protect, updateMovie)
  .delete(protect, deleteMovie);

module.exports = router;
