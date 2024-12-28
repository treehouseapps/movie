import CardAllItem from "../components/card/cardAllItem";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../components/ui/loadingSpin";
import Footer from "../components/footer";
import Header from "../components/ui/header";
import { useState } from "react";

const Movies = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "?api_key=777a620fe0481ab7da037455f07f283b";

  const [fetchKey, setFetchKey] = useState("/movie/popular");
  const [selectedButton, setSelectedButton] = useState("/movie/popular");

  // Function to handle button click and update the state
  const handleButtonClick = (key) => {
    setFetchKey(key);
    setSelectedButton(key); // Update selected button
  };

  const fetchMovies = async () => {
    const response = await fetch(API_URL + fetchKey + API_KEY);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["movies", fetchKey],
    queryFn: fetchMovies,
    refetchOnWindowFocus: false,
  });

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
      {data?.results?.length > 0 && (
        <CardAllItem data={data.results} type="movie" head="Movies" />
      )}
      <Footer />
    </div>
  );
};

export default Movies;
