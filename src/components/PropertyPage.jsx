import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import "./PropertyPage Style.css";
import BedRoundedIcon from "@mui/icons-material/BedRounded";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import wavesUp from "../assets/waveUp.svg";
import Loader from "./Loader";

function PropertyPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  let thePropObj;
  for (let i = 0; i < data.results.length; i++) {
    if (data.results[i].zpid == id) {
      thePropObj = data.results[i];
    }
  }
  let adress = thePropObj.streetAddress;
  let price = thePropObj.price;
  let img = thePropObj.imgSrc;
  let bathrooms = thePropObj.bathrooms;
  let bedrooms = thePropObj.bedrooms;
  let units = thePropObj.lotAreaUnit;
  let size = thePropObj.lotAreaValue;
  let country = thePropObj.country;
  let city = thePropObj.city;

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div id="the-prop-container">
          <img id="wave-up-img" src={wavesUp} alt="" />
          <div id="top-section">
            <div id="the-prop-img" price={`${price.toLocaleString()}$`}>
              <img id="the-img" src={`${img}`} alt="" />
            </div>

            <div id="the-prop-info">
              <h1>Propetry Info</h1>
              <div id="info-bubble-section">
                <div id="adress" className="info-bubble">
                  <LocationOnOutlinedIcon />
                  {`${adress}, ${city},  ${country} `}
                </div>
                <div id="size" className="info-bubble">
                  <HomeOutlinedIcon />
                  {`${size} ${units}`}{" "}
                </div>
                <div id="bedrooms" className="info-bubble">
                  <BedRoundedIcon /> bedrooms: {bedrooms}
                </div>
                <div id="bathrooms" className="info-bubble">
                  <BathtubOutlinedIcon /> bathrooms: {bathrooms}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PropertyPage;
