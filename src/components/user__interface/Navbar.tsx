import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h4>Blog REACT App with Firebase</h4>
        <Link to="/">
          <Avatar src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
