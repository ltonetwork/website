import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="htit mb-20">
          <h4 className="section-title">Project Background</h4>
        </div>
        <div className="text">
          <Split>
            <p className="wow txt words chars splitting" data-splitting>
            LTO Network is a hybrid blockchain for securing, exchanging and verification of digital assets. Our mission is to build cutting edge solutions that promote decentralization across B2B, consumer and crypto to crypto use cases. 
            </p>
            <br/>
            <p>Our network has been used by:</p>
          </Split>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
