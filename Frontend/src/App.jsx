import { useState } from "react";
import "./App.css";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import PostAnalysis from "./PostAnalysis.jsx";
import ParallaxImage from "./ParallaxImage.jsx";
import Stats from "./Stats.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PostAnalysis />
      <ParallaxImage />
      <Stats />
      <Footer />
    </>
  );
}

export default App;
