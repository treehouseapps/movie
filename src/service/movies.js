import CardAllItem from "../components/card/cardAllItem";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../components/ui/loadingSpin";
import Footer from "../components/footer";

const Movies = () => {
  const urll = "https://api.themoviedb.org/3/discover/movie?api_key=777a620fe0481ab7da037455f07f283b";

  const fetchMovies = async () => {
    const response = await fetch(urll);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  // Using `useQuery` with the object syntax
  const { data, error, isLoading } = useQuery({
    queryKey: ["movies"], // Unique key for the query
    queryFn: fetchMovies, // Fetching function
  });

  return (
    <div>
      {isLoading && <LoadingSpin data={isLoading} />}
      {data?.results?.length > 0 && (
        <CardAllItem data={data.results} type="movie" head="Movies" />
      )}
      <Footer />
    </div>
  );
};

export default Movies;
