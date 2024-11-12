import { useEffect, useState } from 'react'
import data from "../api/api";
import datasample from "../api/apisample";
import Navbar from "../components/navbar";
import Slide from "../components/Slide";
import Cardimage from "./cardimg";
import Card from "./card";
const Home = () => {
  const [ anime, setAnime ] = useState([])
const url = 'https://api.jikan.moe/v4/anime'
const fetchInfo = (url) => {
    return fetch(url)
            .then((res) => res.json())
            .then(data => setAnime(data.data.sort((a, b) => a.rank - b.rank)))
            .then(() => console.log('gold digger'))
            .then(() => console.log(anime))
}

useEffect(() => {
    fetchInfo(url)
    
}, [])

  return (
    <div className="container-fluid">
      <div className="header">
        <Navbar />
        <Slide data={anime.slice(0, 3)} />
      </div>
      <div className="container-fluid">
        <div className="recommended">
          <div className="catagory">
            <p>Trending</p>
            <button className="btn btn-primary">Movies</button>
            <button className="btn btn-outline-primary">TV Shows</button>
          </div>
          <Card data={anime} />
          <Card data={anime} />
        </div>
      </div>
    </div>
  );
};

export default Home;
