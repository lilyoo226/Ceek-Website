import React from "react";
import ArticleHeader from "../components/ArticleHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import PrivacyContent from "../components/PrivacyContent";

const Article = () => {
  return (
    <div>
      <ArticleHeader />
      <Breadcrumbs />
      <PrivacyContent/>
      <Breadcrumbs />
    </div>
  );
};

export default Article;
