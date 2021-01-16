import React from "react";
import TeslaLogo from "../../assets/teslaLogoSmall.svg";
import "./Header.css"
const Header = () => {
  return (
    <div className="header__container">
      <div className="header__logo">
        <img src={TeslaLogo} alt="tesla__logo" />
      </div>

      <div className="header__center">
        <p>MODEL S</p>
        <p>MODEL 3</p>
        <p>MODEL X</p>
        <p>MODEL Y</p>
        <p>SOLAR ROOF</p>
        <p>SOLAR PANELS</p>
      </div>

      <div className="header__right">
        <p>SHOP</p>
        <p>TESLA ACCOUNT</p>
      </div>
    </div>
  );
};

export default Header;
