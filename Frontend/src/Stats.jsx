import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";
import "./Stats.css";
import allEmojis from "./assets/emoji";
import { InView } from "react-intersection-observer";

function Stats() {
  const [emojiIndex, setEmojiIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex(Math.floor(Math.random() * 61));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="st">
        <h1 className="st-f">Stats</h1>
        <div className="st-fir">
          <h1 className="st-fir-f">
            <span className="st-fir-f-span">Based on</span> <br />
            {window.innerWidth > 768 || <br />}
            RoBERTa model.
          </h1>
          <motion.h2
            className="st-fir-s"
            // Intial={{ x: -100 }}
            // animate={{ x: 100 }}
            // transition={{ ease: "easeOut", duration: 2 }}
            // repeat={{ repeat: Infinity }}
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{ ease: "easeInOut", duration: 1, yoyo: Infinity }}
              key={emojiIndex}
            >
              {allEmojis[emojiIndex]}
            </motion.div>
          </motion.h2>
        </div>
        <div className="st-sec">
          <div className="st-sec-f">
            <h3 className="st-sec-f-head">Accuracy:</h3>
            <br />
            <div className="st-sec-f-count">
              <CountUp end={100} redraw={false}>
                {({ countUpRef, start }) => (
                  <InView
                    as="div"
                    onChange={(inView, entry) => inView && start()}
                  >
                    <span ref={countUpRef} />
                  </InView>
                )}
              </CountUp>
            </div>
          </div>

          <h1 className="st-sec-s">Yo bro</h1>
        </div>
      </div>
    </>
  );
}

export default Stats;
