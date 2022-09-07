import React from "react";
import MovieItem from "../components/MovieItem";
import MovieForm from "../components/MovieForm";

const Dashboard = () => {
  const movie = [];
  return (
    <div>
      <MovieItem movie={movie} />
      <MovieForm />
    </div>
  );
};

export default Dashboard;
