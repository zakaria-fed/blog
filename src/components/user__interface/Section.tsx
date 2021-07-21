import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

const Section: React.FC<{ title: string; articles: object }> = ({
  title,
  articles,
}) => {
  const [articlesData, setArticlesData] = useState([{}]);

  const renderArticlesCard = () => {
    setArticlesData((prev: any) => [...prev, articles]);
  };

  useEffect(() => {
    renderArticlesCard();
    return () => renderArticlesCard();
  }, []);

  return (
    <div className="section">
      <div className="line"></div>
      <div className="section__content">
        <div className="section__title">
          <h4>{title}</h4>
        </div>
        {/* Fetch Articles data from Firebase */}
        <div className="section__articles">
          {articlesData.length > 1 ? articlesData.map((article: any) => {
            if (article.hasOwnProperty("title")) {
              return <ArticleCard title={article.title} para={article.para} />;
            }
          }) : ""}
        </div>
      </div>
    </div>
  );
};

export default Section;
