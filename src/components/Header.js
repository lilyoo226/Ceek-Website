import React from "react";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-container">
              <div className="countdown">
                <span id="clock" />
              </div>
              <h1>SEO Training Course</h1>
              <p className="p-large">
                Do you feel like you're doing a lot of guess work when it comes
                to SEO for your website? Take the SEO training course to change
                that
              </p>
              <a className="btn-solid-lg page-scroll" href="#register">
                REGISTER
              </a>
              <a className="btn-outline-lg page-scroll" href="#instructor">
                DISCOVER
              </a>
            </div>{" "}
            {/* end of text-container */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
      {/* Image Slider */}
      <div className="outer-container">
        <div className="slider-container">
          <div className="swiper-container image-slider-1">
            <div className="swiper-wrapper">
              {/* Slide */}
              <div className="swiper-slide">
                <img
                  className="img-fluid"
                  src="assets/images/details-slide-1.jpg"
                  alt="alternative"
                />
              </div>
              {/* end of slide */}
              {/* Slide */}
              <div className="swiper-slide">
                <img
                  className="img-fluid"
                  src="assets/images/details-slide-2.jpg"
                  alt="alternative"
                />
              </div>
              {/* end of slide */}
              {/* Slide */}
              <div className="swiper-slide">
                <img
                  className="img-fluid"
                  src="assets/images/details-slide-3.jpg"
                  alt="alternative"
                />
              </div>
              {/* end of slide */}
            </div>{" "}
            {/* end of swiper-wrapper */}
            {/* Add Arrows */}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
            {/* end of add arrows */}
          </div>{" "}
          {/* end of swiper-container */}
        </div>{" "}
        {/* end of slider-container */}
      </div>{" "}
      {/* end of outer-container */}
      {/* end of image slider */}
    </header>
  );
};

export default Header;
