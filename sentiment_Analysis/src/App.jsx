import { useState } from "react";
import "./App.css";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import PostAnalysis from "./PostAnalysis.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PostAnalysis />
    </>
  );
}

export default App;
