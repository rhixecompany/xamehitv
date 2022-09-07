import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../actions/movies";

export class MovieItem extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    getMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <Fragment>
        <h2>Movies</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Image</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map((movie) => (
              <tr key={movie._id} className="pagination">
                <td className="page-item">{movie._id}</td>
                <td>
                  <Link className="page-link" to={`/movies/${movie._id}`}>
                    <h3 className="title">{movie.title}</h3>
                  </Link>
                </td>
                <td>
                  <img src={movie.image} alt={movie.image} />
                </td>
                <td>
                  <i>{movie.createdAt}</i>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <div></div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, {
  getMovies,
})(MovieItem);
