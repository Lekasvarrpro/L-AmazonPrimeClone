import React from "react";
import amazon_logo from "../../assets/amazon_logo.png";
import { NavLink } from "react-router-dom"; 

const Logo = () => {
  return (
    // prime logo
    <div className="flex">
      <NavLink to="/">
        <img src={amazon_logo} alt="amazon logo" className="w-25 h-auto" />
      </NavLink>
    </div>
  );
};

export default Logo;
