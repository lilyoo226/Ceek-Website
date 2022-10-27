import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="footer-col first">
          <h5>About Corso</h5>
          <p className="p-small">We're passionate about teaching people how to do better SEO for their online presence</p>
        </div>
      </div> {/* end of col */}
      <div className="col-md-3">
        <div className="footer-col second">
          <h5>Links</h5>
          <ul className="list-unstyled li-space-lg p-small">
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body"><Link to="/terms">Terms &amp; Conditions</Link></div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body"><Link to="/privacy">Privacy Policy</Link></div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body"><Link to="/article">Article Details</Link></div>
            </li>
          </ul>
        </div>
      </div> {/* end of col */}
      <div className="col-md-3">
        <div className="footer-col third">
          <h5>Links</h5>
          <ul className="list-unstyled li-space-lg p-small">
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body"><Link to="/article">Article Details</Link></div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body"><Link to="/terms">Terms &amp; Conditions</Link></div>
            </li>
            <li className="media">
              <i className="fas fa-square" />
              <div className="media-body"><Link to="/privacy">Privacy Policy</Link></div>
            </li>
          </ul>
        </div>
      </div> {/* end of col */}
      <div className="col-md-3">
        <div className="footer-col fourth">
          <h5>Social Media</h5>
          <p className="p-small">For news &amp; updates follow us</p>
          <a href="#your-link">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#your-link">
            <i className="fab fa-twitter" />
          </a>
          <a href="#your-link">
            <i className="fab fa-pinterest-p" />
          </a>
          <a href="#your-link">
            <i className="fab fa-instagram" />
          </a>
          <a href="#your-link">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="#your-link">
            <i className="fab fa-youtube" />
          </a>
        </div> 
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>

  )
}

export default Footer