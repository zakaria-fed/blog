import { Button } from "@material-ui/core";
import React from "react";

import "./ArticleCard.css"

interface ArticleCardInter {
  title: string;
  para: string;
  image: string;
}

const ArticleCard: React.FC<ArticleCardInter> = ({ title, para, image }) => {
  return (
    <div className="articleCard">
      <div
        className="articleCard__image"
        style={{backgroundImage: `url(${image})`}}
      ></div>
      <div className="articleCard__content">
        <h6>{title}</h6>
        <p>{para}</p>
        <div className="articleCard__button">
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
