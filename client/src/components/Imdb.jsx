import { useEffect, useState } from "react";
import axios from "axios";


const Imdb = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  const apiCall = () => {
    setInput(document.getElementById('movie').value);
    console.log(input);
    // if (input !== "")
    //     fetchData();
  };


  const fetchData = async () => {
    const replaceEmptySequences = (str) => {
      return str.replace(/\s+/g, "%20"); // /\s+/g is a regex
    }

    const queryName = replaceEmptySequences(input);
    console.log(queryName);

    const options = {
      method: "GET",
      url: "https://imdb207.p.rapidapi.com/title/" + queryName,
      headers: {
        "X-RapidAPI-Key": "b27c1c2272mshf2fa2c02d31bcbbp13a792jsn3937dac9da1a",
        "X-RapidAPI-Host": "imdb207.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div>
      <div className="nav">
        <h1>WatchMojo</h1>
        <input id="movie" type="text" />
        <button onClick={apiCall}>Submit</button>
      </div>

      <div className="content"></div>

      <div className="imdb">
        {data?.result?.map((movie) => {
          return (
            <>
              <img src={movie?.poster} alt="" />
              {movie?.title}
              {movie?.rating}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Imdb
