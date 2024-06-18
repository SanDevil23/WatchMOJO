  import React, { useState } from "react";
import axios from "axios";
const Main = () => {
  const [data, setData] = useState([]);
  const api_path =
    "https://api.themoviedb.org/3/movie/157336?api_key=38e4ababdc2d93310075e710a67cedf0&append_to_response=videos";

  const getMovie = async () => {
    const response = await axios.get(api_path);
    setData(response);
  };

  return (
    <div>
      <button
        className="p-1 block m-1 bg-black text-white rounded-sm"
        onClick={getMovie}
      >
        Get Movies
      </button>
      <button className="p-1 m-1  bg-black text-white rounded-sm">
        <a href="/watch-console">watch now</a>
      </button>

      <div className="imdb">{/* <img src= alt="" /> */}</div>
    </div>
  );
};

export default Main;
