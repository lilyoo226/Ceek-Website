import React from "react";

const Students = () => {
  return (
    <div className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h2>Who Should Attend The SEO Training Course</h2>
              <p>
                This course is for anyone passionate about the web and
                especially fit for those seeking to improve their online
                presence for company websites and blogs{" "}
              </p>
              <a
                className="btn-solid-reg popup-with-move-anim"
                href="#details-lightbox"
              >
                LIGHTBOX
              </a>
            </div>{" "}
            {/* end of text-container */}
          </div>{" "}
          {/* end of col */}
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="assets/images/students.jpg"
              alt="alternative"
            />
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
};

export default Students;
