import React from "react";

import Header from "./Header";
import Movies from "./Movies";

import "./style.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Movies />
    </div>
  );
}
