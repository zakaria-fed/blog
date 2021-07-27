import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import "./Section.css";

interface interfaceArticles {
  title: string;
  para: string;
  image: string;
  category: string;
}

const Section: React.FC<{ title: string; articles: interfaceArticles[] }> = ({
  title,
  articles,
}) => {
  const [articlesFinal, setArticlesFinal] = useState<interfaceArticles[]>([]);

  const renderArticles = () => {
    // Take the Category and lower its case
    let finalCategory = title.toLowerCase();
    // => For every object, we're gonna check wether the category === title
    articles.forEach((article) => {
      //   => If yes => Store it in a state
      if (finalCategory === article.category) {
        setArticlesFinal((prev: any) => [...prev, article]);
      }
    });
  };

  useEffect(() => {
    renderArticles();
    console.log(articles)
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
          {articles.length > 0 &&
            articles.map((article) => (
              <ArticleCard
                key={Math.random()}
                title={article.title}
                para={article.para}
                image={article.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
