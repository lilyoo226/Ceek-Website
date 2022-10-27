import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="form-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h2>Contact Details</h2>
              <p>
                For registration questions please get in touch using the contact
                details below. For any questions use the form.
              </p>
              <h3>Main Office Location</h3>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-map-marker-alt" />
                  <div className="media-body">
                    22 Innovative, San Francisco, CA 94043, US
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-mobile-alt" />
                  <div className="media-body">
                    +44 68 554 332, &nbsp;&nbsp;
                    <i className="fas fa-mobile-alt" />
                    &nbsp; +44 31 276 112
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-envelope" />
                  <div className="media-body">
                    <a className="light-gray" href="mailto:samuellove228@gmail.com">
                      contact@gmail.com
                    </a>{" "}
                    <i className="fas fa-globe" />
                    <a className="light-gray" href="https://github.com/lilyoo226">
                      www.github.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>{" "}
            {/* end of text-container */}
          </div>{" "}
          {/* end of col */}
          <div className="col-lg-6">
            {/* Contact Form */}
            <form id="contactForm" data-toggle="validator" data-focus="false">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control-input"
                  id="cname"
                  required
                />
                <label className="label-control" htmlFor="cname">
                  Name
                </label>
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control-input"
                  id="cemail"
                  required
                />
                <label className="label-control" htmlFor="cemail">
                  Email
                </label>
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control-textarea"
                  id="cmessage"
                  required
                  defaultValue={""}
                />
                <label className="label-control" htmlFor="cmessage">
                  Your message
                </label>
                <div className="help-block with-errors" />
              </div>
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  id="cterms"
                  defaultValue="Agreed-to-Terms"
                  required
                />
                I have read and agree to Corso's stated{" "}
                <a href="privacy-policy.html">Privacy Policy</a> and{" "}
                <a href="terms-conditions.html">Terms Conditions</a>
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <button type="submit" className="form-control-submit-button">
                  SUBMIT
                </button>
              </div>
              <div className="form-message">
                <div id="cmsgSubmit" className="h3 text-center hidden" />
              </div>
            </form>
            {/* end of contact form */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
};

export default Contact;
