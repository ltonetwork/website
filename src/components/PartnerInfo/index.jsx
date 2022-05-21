/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";
import { useState } from 'react';
import Link from "next/link";

const PartnerInfo = ({partner, logo, alt, info, challenges, solutions, subBG}) => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);

  const [tabTitle, setTitle] = useState('Challenges');
  const [tabContent, setContent] = useState(challenges)
  return (
    <section className={`partner-info ${subBG ? "sub-bg" : ""} section-padding`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content pl-0 pt-0 pb-20">
              <h2 className="wow fadeInUp">{partner}</h2>
              <img className="partner-info__logo" src={`/img/partners/${logo}`} alt={alt} />
              <p className="wow fadeInUp" dangerouslySetInnerHTML={{__html: info}}></p>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="tab-box">
              <div className="tab-box__tabs">
                <span>
                  <button
                    className={`btn-curve ${
                      tabTitle == "Challenges" ? "dark-purple-bg" : "btn-lit"
                    } wow fadeInUp`}
                    data-wow-delay=".5s"
                    onClick={()=>{setTitle('Challenges'); setContent(challenges)}}
                    style={{"padding":"12px 25px"}}
                  >
                    <span>Challenges</span>
                  </button>
                </span>
                <span>
                  <button
                    className={`btn-curve ${
                      tabTitle == "Solutions" ? "dark-purple-bg" : "btn-lit"
                    } wow fadeInUp`}
                    data-wow-delay=".5s"
                    onClick={()=>{setTitle('Solutions'); setContent(solutions)}}
                    style={{"padding":"12px 25px"}}
                  >
                    <span>Solutions</span>
                  </button>
                </span>
              </div>
              <div className="tab-box__content" style={{background: 'var(--lto-primary)' }}>
                <div className="row">
                  <div className="col-lg-12 valign">
                    <div>
                      <Split>
                        <h4
                          className="wow custom-font words chars splitting"
                          data-splitting
                        >
                          {tabTitle}
                        </h4>
                      </Split>
                      <Split>
                        <p className="wow txt words chars splitting" data-splitting  dangerouslySetInnerHTML={{__html: tabContent}}></p>
                      </Split>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerInfo;
