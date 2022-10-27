import React from 'react'

const Video = () => {
  return (
<div className="basic-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2>Course Video Presentation</h2>
        {/* Video Preview */}
        <div className="image-container">
          <div className="video-wrapper">
            <a className="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
              <img className="img-fluid" src="assets/images/video.jpg" alt="alternative" />
              <span className="video-play-button">
                <span />
              </span>
            </a>
          </div> {/* end of video-wrapper */}
        </div> {/* end of image-container */}
        {/* end of video preview */}
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>
  )
}

export default Video