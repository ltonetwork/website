import React from "react";
import Split from "../Split";

const DataAnchoring = () => {
  return (
    <section className="intro-section section-padding pb-0 sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Identity Platform</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <span>Privacy and Regulatory Compliance</span>
                <p className="wow txt words chars splitting" data-splitting>
                LTO Network’s privacy-friendly identity platform allows for GDPR compliant solutions that enable customers to work in DeFi whilst maintaining ownership of their identity and sensitive data. Our tools allow DeFi projects to follow regulatory frameworks and opens up a whole new sector of commerce.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnchoring;
