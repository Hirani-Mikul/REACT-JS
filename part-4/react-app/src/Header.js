import React, { Component, useState } from "react";

import "./style.css";
import "./icons/css/all.css";

export default function Header() {
  const [isActive, setActive] = useState("false");

  const handleMenuToggle = () => {
    setActive(!isActive);
  };
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <header>
      <h1 onClick={reloadPage} id="website-title">
        Movies Search
      </h1>
      <a href="./favorite.html">
        <i className="fas fa-crown icon"></i>
        Favorites
      </a>
      <a href="./liked.html">
        <i className="fas fa-heart icon"></i>
        Liked
      </a>
      <div
        onClick={handleMenuToggle}
        className={!isActive ? "bar-change menu-container" : "menu-container"}
      >
        <div className="menu-bar" id="bar-1"></div>
        <div className="menu-bar" id="bar-2"></div>
        <div className="menu-bar" id="bar-3"></div>
      </div>
    </header>
  );
}
