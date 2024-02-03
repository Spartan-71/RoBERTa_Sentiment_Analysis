import React from "react";
import icon from "./assets/icon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <img src={icon} alt="icon" className="nav-left-icon" />
        <h1 className="nav-left-brandname">Sentiment Analysis</h1>
      </div>
      <div className="nav-right">
        <span className="nav-right-gen">General Analysis</span>
        <button className="nav-right-but">Analyse Post</button>
      </div>
    </div>
  );
}

export default Navbar;
