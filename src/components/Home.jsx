import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import ReactSimplyCarouselExample from "./Carusel";
import data from "./data.json";
import Loader from "./Loader";

import buildings3 from "../assets/buildings4.jpg";

function Home() {
  const [TheData, setTheData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTheData(data?.results);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div id="home-page-container">
      {loading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
      <div id="main-img">
        <img id="home-page-image" src={buildings3} alt="" />
        <h1 id="introduction">
          Unlocking your real estate dreams, one property at a time!
        </h1>
      </div>
      <div id="carousel-section">
        <h1 id="carousel-title">A small taste of our properties</h1>
        <div id="carousel">
          {TheData.length > 0 && (
            <ReactSimplyCarouselExample
              style={{
                display: "flex",
                boxSizing: "border-box",
                justifyContent: "center",
                width: "100%",
                flexDirection: "row",
                flexWrap: "nowrap",
                flexDirection: "row",
                flexFlow: "nowrap",
              }}
              TheData={TheData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
