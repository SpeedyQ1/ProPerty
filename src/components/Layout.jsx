import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./../assets/logo2.jpg";
import logo2 from "./../assets/logo_fix_no_background.png";
import { useNavigate } from "react-router-dom";
function Layout() {
  const navigate = useNavigate();
  return (
    <div id="container">
      <nav>
          <img id="logo" src={logo2} alt="" onClick={()=>navigate("/")}/>
        
        <div className="nav-title-div">
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/properties"}>
            Properties
          </Link>
        </div>
      </nav>

      <div id="outlet">
        <Outlet />
      </div>

      <footer></footer>
    </div>
  );
}

export default Layout;
