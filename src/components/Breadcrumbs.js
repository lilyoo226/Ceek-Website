import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className="ex-basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <i className="fa fa-angle-double-right" />
              <span>Terms &amp; Conditions</span>
            </div>{" "}
            {/* end of breadcrumbs */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
};

export default Breadcrumbs;
