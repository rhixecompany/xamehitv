import React, { useState, useEffect } from "react";

const MoviePage = ({ match }) => {
  let movieId = match.params.id;

  let [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, [movieId]);

  let getMovie = async () => {
    let response = await fetch(`/api/movies/${movieId}/`);
    let data = await response.json();
    setMovie(data);
  };

  return (
    <div>
      <h3>{movie?.title}</h3>
      <img src={movie?.image} alt={movie?.slug} />
    </div>
  );
};

export default MoviePage;
