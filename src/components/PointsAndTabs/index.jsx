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
            <div className="content pl-0 pt-0">
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                  Decentralized Identifiers
                  </h6>
                  <p className="pl-0">
                  Allowing LTO Network to be used as an identity platform.
Any account can be resolved as DID. Multiple ciphers/curves
are supported (natively).
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                  Verifiable Credentials
                  </h6>
                  <p className="pl-0">
                  Decentralized revocation registry for verifiable credentials.
Verifiable presentations can be shared over private layer to
comply with GDPR. 
                  </p>
                </li>
                <li>
                  <Link href="/learn-more" style="position:absolute; right:0;">
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
          <div className="col-lg-6 valign dark-purple-bg">
          <div>
            <div className="row justify-content-around">
              <span>
                <button
                  className={`btn-curve ${
                    tabTitle == "MyCompanyWallet" ? "light-purple-bg" : "btn-lit"
                  } wow fadeInUp`}
                  data-wow-delay=".5s"
                  onClick={()=>{setTitle('MyCompanyWallet'), setContent('MyCompanyWallet content to go here')}}
                  style={{"padding":"12px 25px"}}
                >
                  <span>MyCompanyWallet</span>
                </button>
              </span>
              <span>
                <button
                  className={`btn-curve ${
                    tabTitle == "Proofi" ? "light-purple-bg" : "btn-lit"
                  } wow fadeInUp`}
                  data-wow-delay=".5s"
                  onClick={()=>{setTitle('Proofi'), setContent('Proofi content to go here')}}
                  style={{"padding":"12px 25px"}}
                >
                  <span>Proofi</span>
                </button>
              </span>
              <span>
                <button
                  className={`btn-curve ${
                    tabTitle == "LtoWallet" ? "light-purple-bg" : "btn-lit"
                  } wow fadeInUp`}
                  data-wow-delay=".5s"
                  onClick={()=>{setTitle('LtoWallet'), setContent('LTO content to go here')}}
                  style={{"padding":"12px 25px"}}
                >
                  <span>LTO Wallet</span>
                </button>
              </span>
            </div>
            <section className="min-area">
              <div className="container pt-40">
                <div className="row">
                  <div className="col-lg-6 valign">
                    <div>
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
                  <div className="col-lg-6 valign">
                    <div className="content">
                      <Split>
                      <img className={`icon ${tabTitle}`} src={`/img/identity-platform/${tabTitle}.png`}alt={`${tabTitle}`}/>
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
