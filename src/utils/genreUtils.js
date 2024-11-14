// Function to find genre names based on their IDs
export const getPrimaryGenres = (movieGenreIds, allGenres) => {
  const movieGenres = movieGenreIds.map((id) => {
    const genre = allGenres.find((g) => g.id === id);
    return genre ? genre.name : null;
  });

  // Limit to the first two genres if there are more than two
  return movieGenres.length > 2 ? movieGenres.slice(0, 2) : movieGenres;
};
