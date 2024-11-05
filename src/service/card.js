const MovieList = (props) => {
    const data = props.data;

    return (
        <div className="container-fluid">
            <div className="row divide text-center p-5">
                {data.map((item) => (
                    <div className="col p-2" key={item.id}>
                        <img className="img-fluid" src={item.pic} alt={item.title} />
                        <div className="card-body">
                            <h6 className="card-title">{item.title}</h6>
                            <div className="list">
                                <p className="card-text">{item.releaseDate} | {item.minute} h</p>
                                <p className="card-text">{item.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
