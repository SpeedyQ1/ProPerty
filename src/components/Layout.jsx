import React, { useEffect, useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import logoBlack from "./../assets/myLogoBlack.png";
import logoWhite from "./../assets/myLogoWhiteBigText.png";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [windowWidth, setWindowWidth] = useState("");

  function handleBurgerClicked() {
    setIsActive((prev) => !prev);
  }

  function handleLogoClicked() {
    setIsActive(false);
    navigate("/");
  }

  return (
    <div id="container">
      <div className="burger-btn">
        <img
          id="logo-phone"
          src={logoWhite}
          alt=""
          onClick={() => handleLogoClicked()}
        />

        <button
          className={
            isActive
              ? "hamburger hamburger--slider is-active "
              : "hamburger hamburger--slider"
          }
          type="button"
          onClick={() => handleBurgerClicked()}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <nav
        className={isActive ? "nav-container show" : "nav-container dont-show"}
      >
        <img
          id="logo"
          src={logoWhite}
          alt=""
          onClick={() => handleLogoClicked()}
        />

        <div className="link-div" onClick={() => setIsActive(false)}>
          <Link className="link" to={"/"}>
            Home
          </Link>
        </div>
        <div className="link-div" onClick={() => setIsActive(false)}>
          <Link className="link" to={"/properties"}>
            Properties
          </Link>
        </div>
      </nav>

      <div id="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
