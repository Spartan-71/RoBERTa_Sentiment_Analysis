import React, { useState, useEffect, useRef } from "react";
import "./ParallaxImage.css";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import g1 from "./assets/g1.png";
import g2 from "./assets/g2.png";
import g3 from "./assets/g3.png";
import g4 from "./assets/g4.png";
import g5 from "./assets/g5.png";
import g6 from "./assets/g6.png";
import g7 from "./assets/g7.png";
import g8 from "./assets/g8.png";
import g9 from "./assets/g9.png";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

function ParallaxImage() {
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,

    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);

  const Column = ({ images, y }) => {
    return (
      <motion.div className="column" style={{ y }}>
        {images.map((src, i) => (
          <div key={i} className="imageContainer">
            <img src={src} alt="image" className="ki" />
          </div>
        ))}
      </motion.div>
    );
  };

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);

    requestAnimationFrame(raf);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="main">
      <div className="spacer"></div>
      <div className="gallery">
        <div className="galleryWrapper">
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[0], images[1], images[2]]} y={y4} />
        </div>
      </div>
      <div className="spacer"></div>
    </main>
  );
}

export default ParallaxImage;
