import React, { useEffect, useState } from "react";
import PropCard from "./PropCard";
import "./PropCard Style.css";
import data from "./data.json";
import wavesUp from "../assets/waveUp.svg";
import waveDown from "../assets/waveDown.svg";
import Loader from "./Loader";

function Properties() {
  const [TheData, setTheData] = useState([]);
  const [TheDataCopy, setTheDataCopy] = useState([]);
  const [selectedValueCountry, setSelectedValueCountry] = useState("");
  const [selectedValueCity, setSelectedValueCity] = useState("");
  const [selectedValueBedrooms, setSelectedValueBedrooms] = useState("");
  const [favArr, setFavArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTheData(data.results);
    setTheDataCopy(data.results);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [filters, setFilters] = useState({
    country: "all",
    city: "all",
    bedrooms: "all",
  });

  function sortByPrice(chosen) {
    if (chosen == "Low-To-High") {
      setTheData((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setTheData((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }

  function createAnOption(option) {
    let newArr = [];
    for (let i = 0; i < TheData.length; i++) {
      newArr[i] = TheData[i][option];
    }

    let filteredArr = [...new Set(newArr)];

    return filteredArr.sort().map((theOption, index) => {
      return (
        theOption && (
          <option key={index} value={`${theOption}`}>{`${theOption}`}</option>
        )
      );
    });
  }

  function filterTheData() {
    let selectedFiltersKeys = [];
    let selectedFiltersValues = [];
    let keys = Object.keys(filters);
    let values = Object.values(filters);
    for (let k = 0; k < 3; k++) {
      if (values[k] != "all") {
        selectedFiltersKeys.push(keys[k]);
        selectedFiltersValues.push(values[k]);
      }
    }

    for (let n = 0; n < selectedFiltersValues.length; n++) {
      setTheData((prev) =>
        prev.filter(
          (value) => value[selectedFiltersKeys[n]] == selectedFiltersValues[n]
        )
      );
    }
  }

  useEffect(() => {
    filterTheData();
  }, [filters]);

  console.log(filters);
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div id="page-container">
          <img
            id="background-img"
            src="https://wallpapercave.com/wp/wp3137905.jpg"
            alt=""
          />
          <div id="properties-page-content">
            <div id="filter-section">
              <select
                className="filters-select"
                value={selectedValueCountry}
                id="country"
                onChange={(e) => {
                  setSelectedValueCountry(e.target.value);
                  setFilters((prev) => ({ ...prev, country: e.target.value }));
                }}
              >
                <option disabled hidden value="">
                  Country
                </option>
                {createAnOption("country")}
              </select>

              <select
                className="filters-select"
                value={selectedValueCity}
                id="city"
                onChange={(e) => {
                  setSelectedValueCity(e.target.value);
                  setFilters((prev) => ({ ...prev, city: e.target.value }));
                }}
              >
                <option disabled hidden value="">
                  City
                </option>

                {createAnOption("city")}
              </select>

              <select
                className="filters-select"
                value={selectedValueBedrooms}
                id="bedrooms"
                onChange={(e) => {
                  setFilters((prev) => ({ ...prev, bedrooms: e.target.value }));
                  setSelectedValueBedrooms(e.target.value);
                }}
              >
                <option disabled hidden value="">
                  Bedrooms
                </option>
                {createAnOption("bedrooms")}
              </select>

              <div
                id="clear-btn"
                className="filters-select"
                onClick={() => {
                  setFilters({ country: "all", city: "all", bedrooms: "all" });
                  setTheData(TheDataCopy);
                  setSelectedValueCountry("");
                  setSelectedValueCity("");
                  setSelectedValueBedrooms("");
                }}
              >
                clear
              </div>

              <div
                className="filters-select"
                onClick={() => {
                  setTheData([...new Set(favArr)]);
                }}
              >
                favorite
              </div>
            </div>

            <select
              id="sort"
              className="filters-select"
              onChange={(e) => sortByPrice(e.target.value)}
            >
              <option value="high-to-low">High To Low</option>
              <option value="Low-To-High">Low To High</option>
              <option disabled hidden value="">
                Sort By Price
              </option>
            </select>
            <div id="prop-section">
              {TheData.length > 0 ? (
                TheData.map((value) => {
                  return (
                    <PropCard
                      key={value?.zpid}
                      value={value}
                      favArr={favArr}
                      setFavArr={setFavArr}
                    />
                  );
                })
              ) : (
                <div className="no-favorite-div">
                  <h1>You currently have no favorites</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Properties;
