import React, { useState, useRef, useEffect } from "react";
import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import LoginMenu from "./LoginMenu";


const Header = () => {

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Watchd</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">Movies</Link>
            </li>

            <li>
              <Link to="/">My lists</Link>
            </li>

            <li>
              <LoginMenu />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;




/* OG HEADER
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Watchd</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">Movies</Link>
            </li>

            <li>
              <LoginMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
*/




/*
const Header = () => {

    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Watchd</Link>
                    </div>


                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Movies</Link>
                        </li>
                        <li>
                            <Link to="/" className="btn" style={{ color: "black" }}>Profile</Link>
                        </li>



                        
                    </ul>
                    
                
                </div>

            </div>

        </header>


    );



};

export default Header;
*/

/*
-a state variable isDropdownOpen to keep track of whether the dropdown menu is currently open or not.
-function handleDropdownClick to toggle the value of isDropdownOpen when the "Profile" button is clicked.
-a new <li> element for the "Profile" button with a className of "dropdown" to indicate that it has a dropdown menu.
-an onClick event listener to the "Profile" button to call handleDropdownClick when it's clicked.
-a new <div> element with a className of "dropdown-menu" to contain the links in the dropdown menu.
-We conditionally render the <div> element with the dropdown menu based on the value of isDropdownOpen.
*/