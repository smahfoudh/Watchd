/* import React, { useState } from "react";
import MovieSearchGlobal from "./MovieSearchGlobal";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import MovieTrendingDisplay from "./TrendingComponents/MovieTrendingDisplay";
import TrendingHeading from "./TrendingComponents/TrendingHeading";

const MovieApp = () => {
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-itens-center mt-3 mb-3'> 
        <MovieListHeading heading=''/> 
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <MovieSearchGlobal searchValue={searchValue} />
      <TrendingHeading heading='#trending.'/>
      <MovieTrendingDisplay />
    </div>


  ); 
}; 

export default MovieApp;
*/