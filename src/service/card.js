const MovieList = ({ data }) => {
  
  console.log('data')
  console.log(data)
  console.log('data')
  return (
    <div className="movies-list-container">
      <h1 className="section-title"> Popular Movies </h1>
      <div className="movies-list">
        {data?.map(item => (
          <div className="movie" key={item.id}>
            <img className="img-fluid" src={item.images.jpg.image_url} alt={item.title} />
            <div className="card-body">
              <h6 className="card-title">{item.title}</h6>
              <div className="list">
                <p className="card-text">{item.genres[0].name}/{item.genres[1]?.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
