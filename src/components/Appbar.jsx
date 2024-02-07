import React, { useEffect} from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { headingAnimate } from "../gsap";
const Appbar = () => {

  useEffect(()=>{
         headingAnimate()
  },[])
  return (
    <div
      className="container-fluid px-5 w-100 app-bar"
      style={{ background: "#3b5d50",overflow:"hidden" }}
    >
      <div className="row m-0">
        <div className="col-2 col-lg-4 col-md-3 col-sm-2 m-0 p-0">
          <h2 className="w-100 h-100 m-0 px-md-2 main-logo h1 text-light">
            Furni
          </h2>
        </div>
        <div className="col-sm-10 col-lg-8 col-md-9 col-10">
          <div className="row h-100 menu-bar">
            <div className="col-lg-8  col-sm-10 col-md-9 col-2 d-flex justify-content-between align-items-center text-light ">
              <span >Home</span>
              <span>About Us</span>
              <span>Services</span>
              <span>Blog</span>
              <span>Contact Us</span>
            </div>
            <div className="offset-lg-2 offset-md-1 col-sm-2 col-md-2 col-lg-2 col-6 offset-0 d-flex justify-content-between align-items-center">
              <PersonOutlineOutlinedIcon
                sx={{ color: "white", width: "50%" }}
                className="icon"
              ></PersonOutlineOutlinedIcon>
              <ShoppingCartOutlinedIcon
                sx={{ color: "white", width: "50%" }}
                className="icon"
              ></ShoppingCartOutlinedIcon>
              <MenuIcon
                className="menuIcon"
                sx={{ color: "white", width: "50%" }}
              ></MenuIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
