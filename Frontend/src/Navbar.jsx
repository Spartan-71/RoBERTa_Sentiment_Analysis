import React from "react";
import icon from "./assets/icon.png";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.13], [1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div className="nav">
      <div className="nav-left">
        <img src={icon} alt="icon" className="nav-left-icon" />
        <motion.h1 className="nav-left-brandname" style={{ opacity, x }}>
          Sentiment Analysis
        </motion.h1>
      </div>
      <div className="nav-right">
        {innerWidth > 768 && (
          <a
            className="nav-right-gen"
            onClick={(e) => {
              e.preventDefault();
              let Element = document.querySelector(".st");
              if (Element) Element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            General Analysis
          </a>
        )}
        <motion.button
          className="nav-right-but"
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          onClick={(e) => {
            e.preventDefault();
            let Element = document.querySelector(".pa");
            if (Element) Element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Analyse Post
        </motion.button>
      </div>
    </div>
  );
}

export default Navbar;
