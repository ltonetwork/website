/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";

const IdentityPlatform = () => {
  return (
    <section className="intro-section pt-40 pb-0 sub-bg identity">
      <div className="container pb-30">
        <div className="htit mb-20">
          <h4 className="section-title">Identity Platform</h4>
        </div>
        <div className="text">
          <Split>
            <span className="pb-20 secondary-color subtitle">PRIVACY AND REGULATORY COMPLIANCE</span>
            <p className="wow txt words chars splitting" data-splitting>
            LTO Network’s privacy-friendly identity platform allows for GDPR compliant solutions that enable customers to work in DeFi whilst maintaining ownership of their identity and sensitive data. Our tools allow DeFi projects to follow regulatory frameworks and opens up a whole new sector of commerce.
            </p>
          </Split>
        </div>
      </div>
      <div className="container min-area pt-30 pb-60">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content pl-0 pt-0 pb-20">
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>Decentralized Identifiers</h6>
                  <p className="pl-0">Allowing LTO Network to be used as an identity platform. Any account can be resolved as DID. Multiple ciphers/curves are supported (natively).</p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>Verifiable Credentials</h6>
                  <p className="pl-0">Decentralized revocation registry for verifiable credentials. Verifiable presentations can be shared over private layer to comply with GDPR.</p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <img src="/img/about/gdpr-compliant.png" alt="GDPR Compliant" style={{ width: 'auto', marginLeft: 'auto' }}  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <img src="/img/about/cobalt-promo.png" alt="Cobalt by LTO Network - Powered by Mainnet Update" style={{ width: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentityPlatform;
