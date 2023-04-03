import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieSearchGlobal from "./components/MovieSearchGlobal";
import MovieApp from "./components/MovieApp";
import Movies from "./components/MoviesPage/Movies";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
//import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { Router } from 'react-router-dom';
import "./lib/font-awesome/css/all.min.css";
import Film from './components/Film/Film';
import React, {useState} from 'react';
import LoginApp from './components/LoginRegistration/Login/LoginApp';
import Register from './components/LoginRegistration/Register/Register';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes> 
      <Route exact path="/" element={ <MovieApp /> } />
      <Route exact path="/MoviesPage/Movies" element={ <Movies /> } />
      <Route exact path="/Title/:id" element={ <Film /> } />
      </Routes>

    </BrowserRouter>

  );
};

export default App; 



/* LOGIN CARD: */
/*
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  
  const handleRegister = () => {
    setIsLoggedIn(true);
  };


  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<MovieApp />} />
            <Route exact path="/MoviesPage/Movies" element={<Movies />} />
            <Route exact path="/Title/:id" element={<Film />} />
          </Routes>
        </>
      ) : (
        
        
        
        <LoginApp onLogin={handleLogin} />
      )}
    </BrowserRouter>
  );
}

export default App;

*/


/* REGISTRATION CODE 
const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
  }

  return (
    <BrowserRouter>
      {isRegistered ? (
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<MovieApp />} />
            <Route exact path="/MoviesPage/Movies" element={<Movies />} />
            <Route exact path="/Title/:id" element={<Film />} />
          </Routes>
        </>
      ) : (
        <Register onRegister={handleRegister} />
      )}
    </BrowserRouter>
  );
}

export default App;
*/


/*NORMAL:*/

/*
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes> 
      <Route exact path="/" element={ <MovieApp /> } />
      <Route exact path="/MoviesPage/Movies" element={ <Movies /> } />
      <Route exact path="/Title/:id" element={ <Film /> } />
      </Routes>

    </BrowserRouter>

  );
};

export default App; 
*/