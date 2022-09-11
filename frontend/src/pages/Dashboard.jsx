import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MovieForm from "../components/MovieForm";
import MovieItem from "../components/MovieItem";
import Spinner from "../components/Spinner";
import { getMovies, reset } from "../features/movies/movieSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  // eslint-disable-next-line
  const { movies, isLoading, isError, message } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getMovies());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Movies Dashboard</p>
      </section>
      <MovieForm />
      <section className="content">
        {movies.length > 0 ? (
          <div className="movies">
            {movies.map((movie) => (
              <MovieItem key={movie._id} movie={movie} />
            ))}
          </div>
        ) : (
          <h3>You have Not Added any Movies</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
