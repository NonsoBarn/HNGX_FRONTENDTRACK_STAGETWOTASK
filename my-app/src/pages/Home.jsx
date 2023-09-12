import React from "react";
import { useState, useEffect } from "react";

import axiosInstance from "../utils/api";
import MovieList from "../components/MovieList";
import Hero from "../components/Hero";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch top-rated movies from TMDB API
    axiosInstance
      .get("/movie/top_rated")
      .then((response) => {
        setTopMovies(response.data.results);
        setLoading(false);

        // console.log(topMovies);
      })
      .catch((error) => {
        setError("Request failed: Could not get movies data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Hero />
      <MovieList topMovies={topMovies} error={error} loading={loading} />
    </div>
  );
};

export default Home;
