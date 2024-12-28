import { useState, useEffect } from "react";
import { getPrimaryGenres } from "../../utils/genreUtils";
import getGenres from "../../api/getGenres";

const MovieList = ({ data, type, title }) => {
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const { error, data } = await getGenres();

      setAllGenres(data.genres);
    };
    fetchGenres();
  }, []);
  console.log(`data`, data)
  return (
    <div className="movies-list-container">
      <h1 className="section-title"> {title} </h1>
      <div className="movies-list">
        {data?.map((item) => (
          <a href={`/${type}/${item.id}`} className="movie" key={item.id}>
            <img
              className={`img-fluid ${item.src ? "" : "backgroundAnimation"}`}
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={''}
              style={{
                width: '241px',
                // height: '362px',
                // backgroundColor: item.src ? '' : 'lightgray' 
              }}
            />
            <div className="card-body">
              <h6 className="card-title">{item.title || item.name}</h6>
              <div className="list">
                <p className="card-text">
                  {getPrimaryGenres(item.genre_ids, allGenres)
                    .slice(0, 2)
                    .join(" / ")}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
