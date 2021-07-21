import React from "react";
import "./Header.css";

const Header: React.FC<any> = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h1>
          Blog Website <br /> Made by Mr. <span>Zakaria Imzilen</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
