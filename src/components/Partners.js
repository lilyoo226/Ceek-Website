import React from 'react'

const Partners = () => {
  return (
    <div className="slider-1">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <p className="p-small">FEATURED IN</p>
        {/* Image Slider */}
        <div className="slider-container">
          <div className="swiper-container image-slider-2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img className="img-fluid" src="assets/images/customer-logo-1.png" alt="alternative" />
              </div>
              <div className="swiper-slide">
                <img className="img-fluid" src="assets/images/customer-logo-2.png" alt="alternative" />
              </div>
              <div className="swiper-slide">
                <img className="img-fluid" src="assets/images/customer-logo-3.png" alt="alternative" />
              </div>
              <div className="swiper-slide">
                <img className="img-fluid" src="assets/images/customer-logo-4.png" alt="alternative" />
              </div>
              <div className="swiper-slide">
                <img className="img-fluid" src="assets/images/customer-logo-5.png" alt="alternative" />
              </div>
              <div className="swiper-slide">
                <img className="img-fluid" src="assets/images/customer-logo-6.png" alt="alternative" />
              </div>
            </div> {/* end of swiper-wrapper */}
          </div> {/* end of swiper container */}
        </div> {/* end of slider-container */}
        {/* end of image slider */}
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>

  )
}

export default Partners