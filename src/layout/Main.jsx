import React from "react";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";
import Date from "../components/Date";
import Description from "../components/Description";
import DetailsLightbox from "../components/DetailsLightbox";
import Header from "../components/Header";
import Instructor from "../components/Instructor";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Registration from "../components/Registration";
import Students from "../components/Students";
import Takeaways from "../components/Takeaways";
import Testimonial from "../components/Testimonial";
import Video from "../components/Video";

const Main = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Registration />
      <Partners />
      <Instructor />
      <Description />
      <Students />
      <DetailsLightbox />
      <Video />
      <Takeaways />
      <Testimonial />
      <Date />
      <Contact />
    </>
  );
};

export default Main;
