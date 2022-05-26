import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section id="about" className="intro-section pt-80 pb-0">
      <div className="container">
        <div className="htit mb-20">
          <h2 className="section-title">What is LTO Network?</h2>
        </div>
        <div className="text">
          <Split>
            <p className="wow txt words chars splitting" data-splitting>
            LTO Network is a hybrid blockchain for securing, exchanging and verification of digital assets. Our mission is to build cutting edge solutions that promote decentralization across B2B, consumer and crypto to crypto use cases. 
            </p>
            <br/>
            <p>Our network has been used by some of the following organizations:</p>
          </Split>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
