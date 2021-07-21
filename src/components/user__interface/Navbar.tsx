import { Avatar } from "@material-ui/core";
import React from "react";

import "./Navbar.css";

interface data {
  image: string;
  username: string;
}

const Navbar: React.FC<data> = ({ image, username }) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Avatar src="https://images.pexels.com/photos/8704780/pexels-photo-8704780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <div className="navbar__profile">
        <Avatar src={image} alt={username} />
        <h6>User__name</h6>
      </div>
    </div>
  );
};

export default Navbar;
