const MovieList = props => {
  const data = props.data;

  return (
    <div className="movies-list-container">
      <h2 className="section-title"> Popular Movies </h2>
      <div className="movies-list">
        {data.map(item => (
          <div className="movie" key={item.id}>
            <img className="img-fluid" src={item.pic} alt={item.title} />
            <div className="card-body">
              <h6 className="card-title">{item.title}</h6>
              <div className="list">
                <p className="card-text">{item.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
