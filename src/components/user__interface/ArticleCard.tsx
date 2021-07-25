import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import "./ArticleCard.css";

interface ArticleCardInter {
  title: string;
  para: string;
  image: string;
}

const ArticleCard: React.FC<ArticleCardInter> = ({ title, para, image }) => {
  let cusTitle = title.toLowerCase();

  return (
    <div className="articleCard">
      <div
        className="articleCard__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="articleCard__content">
        <h6>{title}</h6>
        <p>{para}</p>
        <div className="articleCard__button">
          <Link to={`articles/${cusTitle}`}>
            <Button className="learnMore">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
