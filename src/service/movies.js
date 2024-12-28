import CardAllItem from "../components/card/cardAllItem";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../components/ui/loadingSpin";
import Footer from "../components/footer";
import Header from "../components/ui/header";
import { useState } from "react";
import { Pagination } from '@mui/material';

const Movies = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "?api_key=777a620fe0481ab7da037455f07f283b";

  const [fetchKey, setFetchKey] = useState("/movie/popular");
  const [selectedButton, setSelectedButton] = useState("/movie/popular");
  const [currentPage, setCurrentPage] = useState(1); // State for tracking current page
  const itemsPerPage = 10; // Number of items to show per page

  // Function to handle button click and update the state
  const handleButtonClick = (key) => {
    setFetchKey(key);
    setSelectedButton(key); // Update selected button
    setCurrentPage(1); // Reset to page 1 when changing categories
  };

  const fetchMovies = async () => {
    const response = await fetch(API_URL + fetchKey + API_KEY);
    const responsee = await fetch(API_URL + fetchKey + API_KEY + "&page=1&per_page=50");
    if (!responsee.ok) {
      throw new Error("Network response was not ok");
    }
    return responsee.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["movies", fetchKey],
    queryFn: fetchMovies,
    refetchOnWindowFocus: false,
  });

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMovies = data?.results?.slice(startIndex, startIndex + itemsPerPage) || [];

  return (
    <div>
      <Header
        head="Movies"
        pageType="movies"
        onClick={handleButtonClick}
        selectedButton={selectedButton} // Pass selected button state
      />
      {isLoading && <LoadingSpin data={isLoading} />}
      {error && <div>Error loading movies. Please try again later.</div>}

      {/* Display the paginated movies */}
      {paginatedMovies.length > 0 && (
        <CardAllItem data={paginatedMovies} type="movie" head="Movies" />
      )}

      {/* Pagination component */}
      {data?.results?.length > itemsPerPage && (
        <Pagination
          count={Math.ceil(data.results.length / itemsPerPage)} // Calculate total pages
          page={currentPage} // Current active page
          onChange={(event, page) => setCurrentPage(page)} // Update page number
          sx={{ mt: 4, display: "flex", justifyContent: "center" }}
        />
      )}

      <Footer />
    </div>
  );
};

export default Movies;
