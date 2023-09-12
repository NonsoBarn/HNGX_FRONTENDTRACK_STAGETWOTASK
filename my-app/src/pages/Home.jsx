import React from "react";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <MovieList />
    </div>
  );
};

export default Home;
