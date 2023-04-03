import React, { useState, useEffect } from "react";
import Trending from "./Trending";

const MovieTrendingDisplay = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=391d1878fb3bdd8c1c203c6ce2a93e50`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.results) {
      const movieDetailsPromises = responseJson.results.map(async (movie) => {
        const detailsUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=391d1878fb3bdd8c1c203c6ce2a93e50&language=en-US`;
        const detailsResponse = await fetch(detailsUrl);
        const detailsResponseJson = await detailsResponse.json();
        movie.imdb_id = detailsResponseJson.imdb_id || null; // Set to null if no IMDb ID is found
        return movie;
      });

      const moviesWithDetails = await Promise.all(movieDetailsPromises);
      setMovies(moviesWithDetails);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app" style={{ marginTop: "10px" }}>
  
      <div className="row">
        <Trending movies={movies} />
      </div>
    </div>
  
    );
};

export default MovieTrendingDisplay;


/*
import React, { useState, useEffect } from "react";
import Trending from "./Trending";

const MovieTrendingDisplay = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=391d1878fb3bdd8c1c203c6ce2a93e50`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
  <div className="container-fluid movie-app" style={{ marginTop: "10px" }}>

    <div className="row">
      <Trending movies={movies} />
    </div>
  </div>

  );
};

export default MovieTrendingDisplay;
*/