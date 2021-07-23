import React from "react";
import { useParams } from "react-router-dom";
import "./Article.css";

interface ArticleInter {
  image: string;
  title: string;
  para: string;
}

const Article: React.FC<ArticleInter> = ({ image, title, para }) => {
  const {articleName} = useParams<{articleName?:string}>()
  
  // Here I need to check wether the Article name exist in Firebase
   // if(articleName) {}

  return (
    <div className="article">
      <div
        className="article__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="article__content">
        <h1>{articleName}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Article;
