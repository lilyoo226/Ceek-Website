import React from "react";

const Registration = () => {
  return (
    <div id="register" className="form-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h2>Register Using The Form</h2>
              <p>
                It's easy to register for the course, just fill out the form and
                click submit. Then you will be registered for one of the best
                SEO training courses in the industry
              </p>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    <strong>Your information</strong> is required to complete
                    the registration
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    <strong>It's safe with us</strong> and will not be used for
                    marketing
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square" />
                  <div className="media-body">
                    <strong>You will receive</strong> a confirmation email in
                    less than 24h
                  </div>
                </li>
              </ul>
            </div>{" "}
            {/* end of text-container */}
          </div>{" "}
          {/* end of col */}
          <div className="col-lg-6">
            {/* Registration Form */}
            <div className="form-container">
              <form
                id="registrationForm"
                data-toggle="validator"
                data-focus="false"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    id="rname"
                    name="rname"
                    required
                  />
                  <label className="label-control" htmlFor="rname">
                    Complete name
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-input"
                    id="remail"
                    name="remail"
                    required
                  />
                  <label className="label-control" htmlFor="remail">
                    Email address
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    id="rphone"
                    name="rphone"
                    required
                  />
                  <label className="label-control" htmlFor="rphone">
                    Phone number
                  </label>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group checkbox">
                  <input
                    type="checkbox"
                    id="rterms"
                    defaultValue="Agreed-to-Terms"
                    name="rterms"
                    required
                  />
                  I've read and agree to Corso's written{" "}
                  <a href="privacy-policy.html">Privacy Policy</a> and{" "}
                  <a href="terms-conditions.html">Terms &amp; Conditions</a>
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">
                    REGISTER
                  </button>
                </div>
                <div className="form-message">
                  <div id="rmsgSubmit" className="h3 text-center hidden" />
                </div>
              </form>
            </div>{" "}
            {/* end of form-container */}
            {/* end of registration form */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
};

export default Registration;
