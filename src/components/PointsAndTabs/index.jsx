/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";
import { useState } from 'react';
import Link from "next/link"
const MinimalArea = ({theme}) => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  const [tabTitle, setTitle] = useState('MyCompanyWallet');
  const [tabContent, setContent] = useState('Details coming soon!')
  return (
    <section className="min-area sub-bg section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                  Decentralized Identifiers
                  </h6>
                  <p>
                  Allowing LTO Network to be used as an identity platform.
Any account can be resolved as DID. Multiple ciphers/curves
are supported (natively).
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                  Verifiable Credentials
                  </h6>
                  <p>
                  Decentralized revocation registry for verifiable credentials.
Verifiable presentations can be shared over private layer to
comply with GDPR. 
                  </p>
                </li>
                <li>
                  <Link href="/contact/contact-dark" style="position:absolute; right:0;">
                    <a
                      className={`btn-curve ${
                        theme == "light" ? "btn-blc" : "btn-lit"
                      } wow fadeInUp`}
                      data-wow-delay=".5s"
                    >
                      <span>Learn More</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 valign">
          <div className="content">
            <div className="row">
              <span>
                <button
                  className={`btn-curve ${
                    tabTitle == "MyCompanyWallet" ? "btn-blc" : "btn-lit"
                  } wow fadeInUp`}
                  data-wow-delay=".5s"
                  onClick={()=>{setTitle('MyCompanyWallet'), setContent('MyCompanyWallet content to go here')}}
                >
                  <span>MyCompanyWallet</span>
                </button>
              </span>
              <span>
                <button
                  className={`btn-curve ${
                    tabTitle == "Proofi" ? "btn-blc" : "btn-lit"
                  } wow fadeInUp`}
                  data-wow-delay=".5s"
                  onClick={()=>{setTitle('Proofi'), setContent('Proofi content to go here')}}
                >
                  <span>Proofi</span>
                </button>
              </span>
              <span>
                <button
                  className={`btn-curve ${
                    tabTitle == "LtoWallet" ? "btn-blc" : "btn-lit"
                  } wow fadeInUp`}
                  data-wow-delay=".5s"
                  onClick={()=>{setTitle('LtoWallet'), setContent('LTO content to go here')}}
                >
                  <span>LTO Wallet</span>
                </button>
              </span>
            </div>
            <section className="min-area sub-bg">
      <div className="container pt-40">
        <div className="row">
          <div className="col-lg-6 valign sub-bg">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  <h3>{tabTitle}</h3>
                </h4>
              </Split>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                <p>{tabContent}</p>
                </p>
              </Split>
            </div>
          </div>
          <div className="col-lg-6 valign sub-bg">
            <div className="content">
              <Split>
              <img className={`icon ${tabTitle}`} src={`/img/${tabTitle}.png`}alt={`${tabTitle}`}/>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>

          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
