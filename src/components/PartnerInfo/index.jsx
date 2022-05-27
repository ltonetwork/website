/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import Split from "../Split";
import { useState } from 'react';
import Link from "next/link";

const PartnerInfo = ({partner, logo, alt, info, challenges, challengesImg, challengesImgAlt, solutions, solutionsImg, solutionsImgAlt, subBG}) => {
  React.useEffect(() => {
    featuresEffect();
  }, []);

  const [tabTitle, setTitle] = useState('Challenges');
  const [tabContent, setContent] = useState(challenges)
  const [tabImage, setImage] = useState(challengesImg)
  const [tabAlt, setAlt] = useState(challengesImgAlt)
  return (
    <section className={`partner-info ${subBG ? "sub-bg" : ""} section-padding`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content pl-0 pt-0 pb-20">
              <h2 className="wow fadeInUp">{partner}</h2>
              <p className="wow fadeInUp" dangerouslySetInnerHTML={{__html: info}}></p>
              <img className="partner-info__logo" src={`/img/partners/${logo}`} alt={alt} />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="tab-box">
              <div className="tab-box__tabs">
                <span>
                  <button
                    className={`btn-curve ${
                      tabTitle == "Challenges" ? "dark-purple-bg" : "btn-lit"
                    } wow fadeInUp`}
                    data-wow-delay=".5s"
                    onClick={()=>{
                      setTitle('Challenges'); 
                      setContent(challenges);
                      setImage(challengesImg);
                      setAlt(challengesImgAlt);
                    }}
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
                    onClick={()=>{
                      setTitle('Solutions'); 
                      setContent(solutions);
                      setImage(solutionsImg);
                      setAlt(solutionsImgAlt);
                    }}
                    style={{"padding":"12px 25px"}}
                  >
                    <span>Solutions</span>
                  </button>
                </span>
              </div>
              <div className="tab-box__content" style={{background: 'var(--lto-primary)' }}>
                <div className="row">
                  <div className={`${tabImage != '' ? 'col-lg-7 ' : 'col-lg-12'}`}>
                    <Split>
                      <h4
                        className="wow custom-font words chars splitting"
                        data-splitting
                      >
                        {tabTitle}
                      </h4>
                    </Split>
                    <Split>
                      <div className="wow txt words chars splitting white-text" data-splitting  dangerouslySetInnerHTML={{__html: tabContent}}></div>
                    </Split>
                  </div>
                  {tabImage != '' && <div className="col-lg-5 col-md-5 mt-20-md"><img src={`/img/partners/${tabImage}`}alt={`${tabAlt}`}/></div>}
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
