import React from 'react'

const Testimonial = () => {
  return (
    <div className="slider-2">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h3>Check out our attendees testimonials from previous editions of the SEO Training</h3>
        {/* Text Slider */}
        <div className="slider-container">
          <div className="swiper-container text-slider">
            <div className="swiper-wrapper">
              {/* Slide */}
              <div className="swiper-slide">
                <div className="image-wrapper">
                  <img className="img-fluid" src="assets/images/testimonial-1.jpg" alt="alternative" />
                </div> {/* end of image-wrapper */}
                <div className="text-wrapper">
                  <div className="testimonial-text">I took the SEO training course about a year ago and I am very happy. It taught me all the basics of search engine optimization and some tricks.</div>
                  <div className="testimonial-author">Jude Thorn - Online Marketer</div>
                </div> {/* end of text-wrapper */}
              </div> {/* end of swiper-slide */}
              {/* end of slide */}
              {/* Slide */}
              <div className="swiper-slide">
                <div className="image-wrapper">
                  <img className="img-fluid" src="assets/images/testimonial-2.jpg" alt="alternative" />
                </div> {/* end of image-wrapper */}
                <div className="text-wrapper">
                  <div className="testimonial-text">Awesome course for the money. I never thought I could learn so much about search engine optimization in such a short amount of time. Highly recommend.</div>
                  <div className="testimonial-author">Roy Smith - Developer</div>
                </div> {/* end of text-wrapper */}
              </div> {/* end of swiper-slide */}
              {/* end of slide */}
              {/* Slide */}
              <div className="swiper-slide">
                <div className="image-wrapper">
                  <img className="img-fluid" src="assets/images/testimonial-3.jpg" alt="alternative" />
                </div> {/* end of image-wrapper */}
                <div className="text-wrapper">
                  <div className="testimonial-text">Corso is the best SEO training course in the market. It teaches you all the basics but it also adds value with some advanced tips &amp; tricks the are great.</div>
                  <div className="testimonial-author">Martin Singer - Online Marketer</div>
                </div> {/* end of text-wrapper */}
              </div> {/* end of swiper-slide */}
              {/* end of slide */}
              {/* Slide */}
              <div className="swiper-slide">
                <div className="image-wrapper">
                  <img className="img-fluid" src="assets/images/testimonial-4.jpg" alt="alternative" />
                </div> {/* end of image-wrapper */}
                <div className="text-wrapper">
                  <div className="testimonial-text">Learning SEO can actually be fun. I attended Corso SEO training and I had a great time with my peer students and the instructors. Highly recommended course.</div>
                  <div className="testimonial-author">Ronda Louis - Business Owner</div>
                </div> {/* end of text-wrapper */}
              </div> {/* end of swiper-slide */}
              {/* end of slide */}
            </div> {/* end of swiper-wrapper */}
            {/* Add Arrows */}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
            {/* end of add arrows */}
          </div> {/* end of swiper-container */}
        </div> {/* end of slider-container */}
        {/* end of text slider */}
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>

  )
}

export default Testimonial