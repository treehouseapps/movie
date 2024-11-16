import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const MovieDetails = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=777a620fe0481ab7da037455f07f283b`);

				if (!response.ok) {
					throw new Error('Movie not found');
				}

				const data = await response.json();
				setMovie(data);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchMovieDetails();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!movie) {
		return <div className='da'>Movienn not found!</div>;
	}

	return (
		<div>
			<div className="container">
				<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='da' alt="" />
				<h2 className="da">{movie.title}</h2>
			</div>
		</div>
	);
};

export default MovieDetails;
