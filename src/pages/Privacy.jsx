import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import PrivacyContent from "../components/PrivacyContent";
import PrivacyHeader from "../components/PrivacyHeader";

const Privacy = () => {
  return (
    <>
      <PrivacyHeader />
      <Breadcrumbs />
      <PrivacyContent />
      <Breadcrumbs />
    </>
  );
};

export default Privacy;
