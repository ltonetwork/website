import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Project Background</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                LTO Network is a hybrid blockchain for securing, exchanging and verification of digital assets. Our mission is to build cutting edge solutions that promote decentralization across B2B, consumer and crypto to crypto use cases. 
                </p>
                <br/>
                <p>Our network has been used by</p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
