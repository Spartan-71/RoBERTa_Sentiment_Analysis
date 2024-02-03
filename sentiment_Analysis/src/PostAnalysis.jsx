import React from "react";
import "./PostAnalysis.css";

function PostAnalysis() {
  return (
    <>
      <div className="pa">
        <h1 className="pa-head">Twitter Post Sentiment Analysis</h1>
        <form className="pa-formx">
          <span className="pa-formx-text">Link</span>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="twitter.com/username/status/1234567890"
            className="pa-formx-input"
          ></input>
          <input
            type="submit"
            value="Analyze"
            className="pa-formx-submit"
          ></input>
        </form>
      </div>
    </>
  );
}

export default PostAnalysis;
