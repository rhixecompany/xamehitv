import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMovie } from "../features/movies/movieSlice";

function MovieForm() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createMovie({ title }));
    setTitle("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Movie</label>
          <input
            type="text"
            name="title"
            id="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Movie
          </button>
        </div>
      </form>
    </section>
  );
}

export default MovieForm;
