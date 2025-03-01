import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../style.css";

export default function Header() {
  const [menuBar, setMenuBar] = useState(false);

  function handleChange() {
    setMenuBar(!menuBar);
  }

  return (
    <header>
      <h1><Link to="/">Movie</Link></h1>
      <ul className={menuBar ? "show" : null}>
        <li className="nav-links">
          Genre
          <ul className="sub-menu">
            <li>Action</li>
            <li>Adventure</li>
            <li>Comedy</li>
            <li>Romance</li>
            <li>Drama</li>
            <li>Horror</li>
            <li>Science Fiction</li>
            <li>Historical</li>
          </ul>
        </li>
        <li className="nav-links"><Link to="/favorite">Favorite</Link></li>
        <li className="nav-links"><Link to="/movie_detail_card">Nothing</Link></li>
        <li className="nav-links"><Link to="/login">Log In</Link></li>

      </ul>
      <div
        onClick={handleChange}
        // onFocus={handleChange}
        className={menuBar ? "menu-bar change" : "menu-bar"}
      >
        <div className="bars bar-1"></div>
        <div className="bars bar-2"></div>
        <div className="bars bar-3"></div>
      </div>
    </header>
  );
}
