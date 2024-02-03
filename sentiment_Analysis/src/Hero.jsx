import React from "react";
import { TypeAnimation } from "react-type-animation";
//why is background image not showing up?
import "./Hero.css";
import t1 from "./assets/tweet1.png";
import t2 from "./assets/tweet2.png";
import t3 from "./assets/tweet3.png";
import t4 from "./assets/tweet4.png";

function Hero() {
  return (
    <div className="xyx">
      <div className="hero">
        <div className="hero-img-right">
          <img src={t1} alt="tweet1" className="hero-img-right-tweet tweet1" />
          <img src={t2} alt="tweet2" className="hero-img-right-tweet tweet2" />
        </div>
        <div className="hero-text">
          <h1 className="hero-text-Q">
            Ready to Decode the Opinion of Public?
          </h1>
          <TypeAnimation
            sequence={["Dive into Sentiment Analysis Now!", 1000]}
            wrapper="span"
            speed={10}
            style={{ fontSize: "2.3em", display: "inline-block" }}
            repeat={1}
            className="hero-text-ans"
          />
          <button className="hero-text-btn">Analyse Post</button>
        </div>
        <div className="hero-img-left">
          <img src={t3} alt="tweet3" className="hero-img-left-tweet tweet21" />
          <img src={t4} alt="tweet4" className="hero-img-left-tweet tweet11" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
