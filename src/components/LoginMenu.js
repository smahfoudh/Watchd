import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "./LoginMenu.css"


const LoginMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLinkClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <a
        href="#"
        className="btn"
        onClick={handleLinkClick}
        style={{ color: "black" }}
      >
        ACCOUNT <i className="fa fa-caret-down"></i>
      </a>
      {isOpen && (
        <div className="dropdown-menu">
          <Link
            to="/my-profile"
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          >
            My profile
          </Link>
          
          <Link
            to="/sign-out"
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          >
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginMenu;



/* This contains the dropdown menu component PROFILE from my header */ 
/*
const LoginMenu = ({ isOpen, toggleMenu }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        toggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, toggleMenu]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <a href="#" className="btn" onClick={() => toggleMenu(!isOpen)} style={{ color: "black" }}>
        Profile <i className="fa fa-caret-down"></i>
      </a>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/my-profile" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>My profile</Link>
          <Link to="/my-list" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>My list</Link>
          <Link to="/sign-out" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>Sign out</Link>
        </div>
      )}
    </div>
  );
};

export default LoginMenu;
*/