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
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Hero />
      <MovieList topMovies={topMovies} />
    </div>
  );
};

export default Home;
