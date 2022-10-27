import React from "react";

const Takeaways = () => {
  return (
    <div className="cards">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Key Takeaways</h2>
            <p className="p-heading">
              Here are the main topics that will be covered in the SEO training
              course. They cover all the basics of SEO and even some advanced
              techniques that will help you along the way
            </p>
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
        <div className="row">
          <div className="col-lg-12">
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-atom" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Position Analysis</h4>
                <p>
                  Understand where your website is currently positioned in
                  search engine queries
                </p>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-key" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Keyword Planning</h4>
                <p>
                  Find the best relevant keywords that fit your website SEO
                  strategy in the long run
                </p>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-newspaper" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Writing Articles</h4>
                <p>
                  How to plan your content strategy and write articles that are
                  optimized for SEO
                </p>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-link" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Gathering Backlinks</h4>
                <p>
                  Backlinks are vital for SEO and we'll teach you everything
                  there is to know about them
                </p>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="far fa-handshake" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Build Partnerships</h4>
                <p>
                  Partnerships will help you establish your website or blog as
                  an authority in your field
                </p>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-chart-bar" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Evaluate Actions</h4>
                <p>
                  Learn how to use the right analytics tools to evaluate your
                  SEO actions and improve them
                </p>
              </div>
            </div>
            {/* end of card */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
};

export default Takeaways;
