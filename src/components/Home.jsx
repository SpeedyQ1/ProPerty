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
    <>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div>
          <div id="main-img">
            <img id="image" src={buildings3} alt="" />
            <div id="position-divs">
              <h1 id="intrudoction">
                Unlocking your real estate dreams, one property at a time!
              </h1>
            </div>
          </div>
          <div id="carousel-section">
            <h1>A small taste of our properties</h1>
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
      )}
    </>
  );
}

export default Home;
