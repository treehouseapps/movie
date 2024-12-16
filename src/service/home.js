import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query"
import axios from 'axios'
import { Button } from '@mui/material';
import { lazy, Suspense } from 'react'

import Navbar from "../components/navbar";
import Slide from "../components/Slide";
import Card from "../components/card/card";
import LoadingSpin from "../components/ui/loadingSpin";

import api from '../api/axios'
import useFetch from '../hooks/useFetch'

const Home = () => {
  // const url = "https://api.themoviedb.org/3/discover/movie?api_key=777a620fe0481ab7da037455f07f283b";
  const url = "/discover/movie";

  const fetchMovies = async (url, page = {}) => {
    const cachedData = localStorage.getItem("home")
    try {

      console.log("Searching...")
      const moviesResponse = await api.get("/discover/movie", { params: { page } })
      const tvResponse = await api.get("/trending/tv/week", { params: { page } })
      console.log("More Searching...")
      console.log(tvResponse)
      if(moviesResponse && tvResponse) {
        console.log("using fresh data...")
        const movies = moviesResponse.data.results.slice(0, 10)
        const tv = tvResponse.data.results
        localStorage.setItem("home", JSON.stringify({ movies, tv }))
        return { movies, tv }
      }

      console.log("using cache data...")
      const parsedCacheData = JSON.parse(cachedData)
      console.log(parsedCacheData)
      return { movies: parsedCacheData.movies, tv: parsedCacheData.tv }
    } catch(err) {
      if(cachedData) {
        console.log("using cache data...")
        const parsedCacheData = JSON.parse(cachedData)
        console.log(parsedCacheData)
        return { movies: parsedCacheData.movies, tv: parsedCacheData.tv }
      }
      console.log(err)
      return { error: "Error"}
    }
  }
  
  const { data, isLoading, error } = useQuery({
      queryKey: ["movies"] || ['sda'], 
      queryFn: () => fetchMovies(url),
      // refetchInterval: 90000
    })

  return (
    <div className="container-fluid body-container">
    { isLoading && <LoadingSpin data={ isLoading } /> }
    { error && <h2 className="error"> { error.message } </h2> }
    { (data?.movies?.length > 0) && 
      <>
      <div className="header">
        
        <Slide data={data.movies?.slice(0, 3)} />
      </div>
      
      <div className="container-fluid contents-container">
        <div className="recommended">
          <div className="catagory">
            <p>Trending</p>
            <button className="btn btn-primary">Movies</button>
            <button className="btn btn-outline-primary">TV Shows</button>
          </div>
          <Card data={data.movies} type="movie" title="Popular Movies" />
          <Card data={data.tv} type="tv" title="Trending TV Shows" />
        </div>
      </div>
      </> }
    </div>
  );
};

export default Home;