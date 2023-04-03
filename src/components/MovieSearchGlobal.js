import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

const MovieSearchGlobal = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=391d1878fb3bdd8c1c203c6ce2a93e50&language=en-US&page=1&include_adult=false&query=${searchValue}`;

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
    getMovieRequest(props.searchValue);
  }, [props.searchValue]);

  return (
    <div className="row">
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieSearchGlobal;




/* import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

const MovieSearchGlobal = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=391d1878fb3bdd8c1c203c6ce2a93e50&language=en-US&page=1&include_adult=false&query=${searchValue}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMovieRequest(props.searchValue);
  }, [props.searchValue]);

  return (
    <div className="row">
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieSearchGlobal;
*/