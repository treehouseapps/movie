import Card from "../components/card/card";
import data from '../api/api'
import * as streamingAvailability from "streaming-availability";
import { useState, useEffect } from 'react'

const Anime = async () => {
    const [anime, setAnime] = useState([]);
    const [str, setStr] = useState('');
  const url = "https://api.jikan.moe/v4/anime";
  const fetchInfo = (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setAnime(data.data.sort((a, b) => a.rank - b.rank)))
      .then(() => console.log("gold digger"))
      .then(() => console.log(anime));
  };

  useEffect(() => {
    fetchInfo(url);
  }, []);
  

const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const link = 'https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '2ffe1fcf83msh5b70372959ae955p14b2a0jsn0af39be66dc1',
                    'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(link, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result); // Ensure result is only set after the Promise resolves
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Streaming Availability</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display data as a formatted JSON string */}
        </div>
    );

    // return (
    //     <div>
    //         <h1>Watch Anime </h1>
    //         <p> Single Anime will be listed here soon </p> 
    //         <a href="/"><button>Home</button></a>
    //     </div>
    // );
}

export default Anime;