import React from "react";

const ArticleCard: React.FC<{ title: string; para: string }> = ({
  title,
  para,
}) => {
  return <div>{title} How</div>;
};

export default ArticleCard;
