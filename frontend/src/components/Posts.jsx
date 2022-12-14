import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ul className="card">
        {posts.map((post) => (
          <li key={post._id} className="list-group-item">
            <Link to={`/movies/${post._id}`}>
              <h3>{post.title}</h3>
              <img src={post.image} alt={post.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
