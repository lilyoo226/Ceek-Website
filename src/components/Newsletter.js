import React from 'react'

const Newsletter = () => {
  return (
    <div className="form-2">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h3>Stay updated with news by subscribing to our newsletter and our social channels</h3>
        {/* Newsletter Form */}
        <form id="newsletterForm" data-toggle="validator" data-focus="false">
          <div className="form-group">
            <input type="email" className="form-control-input" id="nemail" required />
            <label className="label-control" htmlFor="nemail">Email</label>
            <div className="help-block with-errors" />
          </div>
          <div className="form-group checkbox">
            <input type="checkbox" id="nterms" defaultValue="Agreed-to-Terms" required />I've read and agree to Corso's written <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
            <div className="help-block with-errors" />
          </div>
          <div className="form-group">
            <button type="submit" className="form-control-submit-button">SIGN UP</button>
          </div>
          <div className="form-message">
            <div id="nmsgSubmit" className="h3 text-center hidden" />
          </div>
        </form>
        {/* end of newsletter form */}
        {/* Social Links */}
        <div className="icon-container">
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fab fa-facebook-f fa-stack-1x" />
            </a>
          </span>
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fab fa-twitter fa-stack-1x" />
            </a>
          </span>
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fab fa-pinterest-p fa-stack-1x" />
            </a>
          </span>
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fab fa-instagram fa-stack-1x" />
            </a>
          </span>
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fab fa-linkedin-in fa-stack-1x" />
            </a>
          </span>
        </div> {/* end of icon-container */}
        {/* end of social icons */}
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>

  )
}

export default Newsletter