import { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import Slide from "../components/Slide";
import Card from "../components/card/card";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState([]);

  const url = "https://api.themoviedb.org/3/discover/movie?api_key=777a620fe0481ab7da037455f07f283b";
  const fetchInfo = async (url) => {
    try {
      const response = await fetch(url)

      if(!response.ok) {
        throw new Error("Couldn't fetch data")
      }

      const result = await response.json()
      return setMovies(result.results)
    } catch (err) {
      setError(err)
      console.log(err)
    }

  };

  useEffect(() => {
    fetchInfo(url);
  }, []);

  return (
    <div className="container-fluid">
      <div className="header">
        <Navbar />
        <Slide data={movies?.slice(0, 3)} />
      </div>
      <div className="container-fluid">
        <div className="recommended">
          <div className="catagory">
            <p>Trending</p>
            <button className="btn btn-primary">Movies</button>
            <button className="btn btn-outline-primary">TV Shows</button>
          </div>
          <Card data={movies} />
          <Card data={movies} />
        </div>
      </div>
    </div>
  );
};

export default Home;
