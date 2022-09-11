import { useEffect, useState } from "react";
import axios from "axios";

const MoviesFeed = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://movie-details1.p.rapidapi.com/imdb_api/movie",
      params: { id: "tt1375666" },
      headers: {
        "X-RapidAPI-Key": "36794a554emsh92525f4734d25e6p1f642cjsn905ca90c7267",
        "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(items);

  const first7Items = items?.slice(0, 7);

  return (
    <div className="movies-feed">
      <h2>Movies Feed</h2>
      {first7Items?.map((item, _index) => (
        <h3>{item.title}</h3>
      ))}
    </div>
  );
};

export default MoviesFeed;
