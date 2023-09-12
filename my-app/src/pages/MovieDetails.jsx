import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/api";
import SideNav from "../components/SideNav";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching movie details from TMDB API using the 'id' parameter
    axiosInstance
      .get(`/movie/${id}`)
      .then((response) => {
        setMovieDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  // console.log(movieDetails);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="">
      <div className="flex">
        {/* Side Nav */}
        <div className="">
          <SideNav />
        </div>

        {/* Movie Details */}

        <div className=" p-10">
          <div className="flex flex-col">
            <div className="mb-4">
              <img
                data-testid="movie-poster"
                src={`https://image.tmdb.org/t/p/w300${movieDetails.backdrop_path}`}
                alt={movieDetails.title}
                className="lg:w-1/2"
              />
            </div>
            <div className="flex gap-5 font-semibold text-sm ">
              <p>{movieDetails.title}</p>
              <ul className="flex justify-center items-center gap-3">
                <li> {movieDetails.release_date}</li>
                <li>{movieDetails.runtime} minutes</li>
              </ul>
            </div>

            {/* description */}
            <div className="w-3/5 mt-3">
              <p>{movieDetails.overview}</p>
            </div>

            {/* Other Addition */}

            <div className="mt-3">
              <div className="flex gap-2 mt-3">
                <p>Tagline :</p>{" "}
                <p className="text-pink-700">{movieDetails.tagline}</p>
              </div>
              <div className="flex gap-2 mt-3">
                <p>Home Page :</p>{" "}
                <p className="text-pink-700">{movieDetails.homepage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
