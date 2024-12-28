import CardAllItem from "../components/card/cardAllItem";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../components/ui/loadingSpin";
import Footer from "../components/footer";
import Header from "../components/ui/header";
import { useState } from "react";

const TVSeries = () => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "?api_key=777a620fe0481ab7da037455f07f283b";

    const [fetchKey, setFetchKey] = useState("/trending/tv/week");
    const [selectedButton, setSelectedButton] = useState("/trending/tv/week");

    // Function to handle button click and update the state
    const handleButtonClick = (key) => {
        setFetchKey(key);
        setSelectedButton(key); // Update selected button
    };

    const fetchTVSeries = async () => {
        const response = await fetch(API_URL + fetchKey + API_KEY);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ["tv", fetchKey],
        queryFn: fetchTVSeries,
        refetchOnWindowFocus: false,
    });

    return (
        <div>
            <Header
                head="TV Series"
                pageType="tv"
                onClick={handleButtonClick}
                selectedButton={selectedButton} // Pass selected button state
            />
            {isLoading && <LoadingSpin data={isLoading} />}
            {error && <div>Error loading TV series. Please try again later.</div>}
            {data?.results?.length > 0 && (
                <CardAllItem data={data.results} type="tv" head="TV Series" />
            )}
            <Footer />
        </div>
    );
};

export default TVSeries;
