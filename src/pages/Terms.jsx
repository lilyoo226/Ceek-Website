import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import TermContent from "../components/TermContent";
import TermHeader from "../components/TermHeader";

const Terms = () => {
  return (
    <>
      <TermHeader />
      <Breadcrumbs />
      <TermContent />
      <Breadcrumbs />
    </>
  );
};

export default Terms;
