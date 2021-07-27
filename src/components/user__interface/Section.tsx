import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import "./Section.css";

interface interfaceArticles {
  title: string;
  para: string;
  image: string;
  category: string;
}

const Section: React.FC<{ articles: interfaceArticles[] }> = ({ articles }) => {
  return (
    <div className="section">
      <div className="section__content">
        {/* Fetch Articles data from Firebase */}
        <div className="section__articles">
          {articles.length > 0 &&
            articles.map((article) => (
              <ArticleCard
                key={Math.random()}
                title={article.title}
                para={article.para}
                image={article.image}
                category={article.category}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
