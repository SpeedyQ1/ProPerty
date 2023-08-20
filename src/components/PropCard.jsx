import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import wavesUp from "../assets/waveUp.svg";


function PropCard({ value, setFavArr, favArr }) {
  const [favBtn, setFavBtn] = useState(false);
  const [currentFavBtn, setCurrentFavBtn] = useState(<FavoriteBorderIcon />);

  function handleClick() {
    if (!favBtn) {
      setFavBtn(true);
      setCurrentFavBtn(<FavoriteIcon />);
      setFavArr((prev) => [...prev, value]);
    }
    if (favBtn) {
      setFavBtn(false);
      setCurrentFavBtn(<FavoriteBorderIcon />);
      setFavArr((prev) => prev.filter((item) => item != value));
    }

    console.log(favArr);
  }
  return (
    <div className={favBtn ? "favorite card" : "card"}>
      <img className="pic" src={`${value.imgSrc}`} alt="" />
      <div className="fav-btn">
        <IconButton
          style={{ padding: "0px" }}
          aria-label="favorite border icon"
          onClick={() => handleClick()}
        >
          {currentFavBtn}
        </IconButton>
      </div>

      <div className="info">
        <h3>{`${value.country} , ${value.city}`}</h3>
        <h3>{`${value.price}$`}</h3>
      </div>

      <div className="view-btn">
        <Link to={`/properties/${value.zpid}`}>
          <Button variant="contained">View</Button>
        </Link>
      </div>
    </div>
  );
}

export default PropCard;
