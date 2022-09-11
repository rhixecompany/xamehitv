import { useDispatch } from "react-redux";
import { deleteMovie } from "../features/movies/movieSlice";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div className="movie">
      <div className="">
        {new Date(movie.createdAt).toLocaleString("en-US")}
      </div>
      <img src={movie.image} alt={movie.image} />
      <h2>{movie.title}</h2>
      <button
        onClick={() => dispatch(deleteMovie(movie._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
};

export default MovieItem;
