import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import "./Section.css";

interface interfaceArticles {
  title: string;
  para: string;
  image: string;
}

const Section: React.FC<{ title: string; articles: interfaceArticles[] }> = ({
  title,
  articles,
}) => {
  const renderArticles = () => {
    return articles.map((article) => {
      return (
        <ArticleCard
          image={article.image}
          title={article.title}
          para={article.para}
        />
      );
    });
  };

  return (
    <div className="section">
      <div className="line"></div>
      <div className="section__content">
        <div className="section__title">
          <h4>{title}</h4>
        </div>
        {/* Fetch Articles data from Firebase */}
        <div className="section__articles">{renderArticles()}</div>
      </div>
    </div>
  );
};

export default Section;
