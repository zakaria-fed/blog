import { Link } from "@material-ui/core";
import React from "react";
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__content">
        <h1>Blog Website</h1>
        <div className="footer__contact">
          <h6>Contact</h6>
          <div className="footer__details">
            <p>Phone Number : +2126 444 21 29 6</p>
            <p>
              LinkedIn Profile :{" "}
              <Link href="https://www.linkedin.com/in/zakaria-imzilen-4711921b0/">
                Zakaria Imzilen
              </Link>
            </p>
            <p>
              Fiverr Profile :{" "}
              <Link href="https://www.fiverr.com/zakaria_fed">Zakaria Fed</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;