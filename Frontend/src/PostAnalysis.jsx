import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./PostAnalysis.css";
import Data from "./assets/Data.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  ResponsiveContainer,
} from "recharts";

function PostAnalysis() {
  const [lin, setlin] = useState("");
  const [dataavailable, setdataavailable] = useState(false);
  // const [df3, setdf3] = useState([{}]);
  const [df3, setdf3] = useState(Data);

  const [dx2, setdx2] = useState([
    {
      name: "Positive",
      value: Data.map((x) => x.uv).reduce((acc, x) => acc + x, 0),
    },
    {
      name: "Negative",
      value: Data.map((x) => x.pv).reduce((acc, x) => acc + x, 0),
    },
    {
      name: "Neutral",
      value: Data.map((x) => x.amt).reduce((acc, x) => acc + x, 0),
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/predict")
  //     .then((res) => {
  //       console.log(res.data);
  //       setdf3(res.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const datax = { link: lin };
  //   try {
  //     console.log("HEllo");
  //     const response = await axios.post("http://localhost:5000/predict", datax);
  //     console.log(response.data);
  //     setdf3(response.data);
  //     setdataavailable(true);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const piehandle = () => {
  //   [
  //     setdx2(
  //       {
  //         name: "Positive",
  //         value: df3
  //           .map((x) => x.scores.positive)
  //           .reduce((acc, x) => acc + x, 0),
  //       },
  //       {
  //         name: "Negative",
  //         value: df3
  //           .map((x) => x.scores.negative)
  //           .reduce((acc, x) => acc + x, 0),
  //       },
  //       {
  //         name: "Neutral",
  //         value: Data.map((x) => x.scores.neutral).reduce(
  //           (acc, x) => acc + x,
  //           0
  //         ),
  //       }
  //     ),
  //   ];
  // };

  // useEffect(() => {
  //   console.log(Data);
  //   console.log(dx2);
  // }, [dx2]);

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
            value={lin}
            onChange={(e) => setlin(e.target.value)}
          ></input>
          <motion.input
            type="submit"
            value="Analyze"
            className="pa-formx-submit"
            initial={{ backgroundColor: "#286efa" }}
            whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            // onClick={(e) => {
            //   e.preventDefault();
            //   setdx2((x) => {
            //     let [a, b, c] = x;
            //     a.value += 10000;
            //     b.value += 10000;
            //     c.value += 10000;
            //     return [a, b, c];
            //   });
            //   console.log(dx2);
            //   console.log(x);
            // }}
            // onClick={handleSubmit}
          ></motion.input>
        </form>
        <div className="vis">
          <BarChart
            width={window.innerWidth > 768 ? 500 : 300}
            height={window.innerWidth > 768 ? 300 : 200}
            data={df3}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey={dataavailable ? "scores.positive" : "uv"}
              fill={dataavailable ? "#fff" : "#797979"}
            />
            <Bar
              dataKey={dataavailable ? "scores.positive" : "pv"}
              fill={dataavailable ? "#fff" : "#797979"}
            />
            <Bar
              dataKey={dataavailable ? "scores.positive" : "amt"}
              fill={dataavailable ? "#fff" : "#797979"}
            />
          </BarChart>
          <PieChart width={window.innerWidth > 768 ? 500 : 400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={dx2}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#797979"
              label
            />

            <Tooltip />
          </PieChart>
        </div>
      </div>
    </>
  );
}

export default PostAnalysis;
