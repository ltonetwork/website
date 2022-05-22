import React from "react";
import Split from "../Split";

const IdentityPlatform = () => {
  return (
    <section className="intro-section pb-0 sub-bg">
      <div className="container pb-30">
        <div className="htit mb-20">
              <h4 className="section-title">Identity Platform</h4>
            </div>
            <div className="text">
              <Split>
                <span className="pb-20 secondary-color">PRIVACY AND REGULATORY COMPLIANCE</span>
                <p className="wow txt words chars splitting" data-splitting>
                LTO Network’s privacy-friendly identity platform allows for GDPR compliant solutions that enable customers to work in DeFi whilst maintaining ownership of their identity and sensitive data. Our tools allow DeFi projects to follow regulatory frameworks and opens up a whole new sector of commerce.
                </p>
              </Split>
            </div>
          </div>
    </section>
  );
};

export default IdentityPlatform;
