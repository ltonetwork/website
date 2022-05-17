import React from "react";

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/about/about-hero.jpeg)" }}
      data-overlay-dark="7"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>What is LTO Network?</h1>
              <div className="path">
                <a href="#0">Home</a>
                <span>/</span>
                <a href="#0" className="active">
                  What is LTO Network?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
