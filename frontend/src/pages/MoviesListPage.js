import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

const MoviesListPage = () => {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  let getMovies = async () => {
    let response = await fetch("/api/movies/");
    let data = await response.json();
    console.log("DATA:", data);
    setMovies(data);
  };

  return (
    <div>
      <div>
        {movies.map((movie, index) => (
          <div key={index}>
            <Movie key={index} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesListPage;
