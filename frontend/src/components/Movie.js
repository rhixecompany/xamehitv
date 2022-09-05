import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Link to={`/movies/${movie._id}`}>
      <h3>{movie.title}</h3>
      <img src={movie.image} alt={movie.image} />
    </Link>
  );
};

export default Movie;
