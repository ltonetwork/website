import React from "react";
import Split from "../Split";
import anchoringPartnersData from "../../data/sections/anchoring-partners.json";

const AnchoringPartners = ({ withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section
      className={`services ${withPadding ? "section-padding" : ""} ${
        withBG ? "sub-bg" : ""
      }`}
    >
      <div className="container">
        {!withOutTitle && (
          <div className="sec-head custom-font text-center">
            <br/>
            <h6 className="wow fadeIn" data-wow-delay=".5s">
            Partners Anchoring on LTO Network
            </h6>
          </div>
        )}
        <div className="row">
          {anchoringPartnersData.map((partner, index) => (
            <div className="col-lg-4" key={partner.id}>
              <div
                className={`item ${
                  index != anchoringPartnersData.length - 1 ? "md-mb50" : ""
                } wow fadeInUp`}
                data-wow-delay={
                  partner.id == 1 ? ".5s" : partner.id == 2 ? ".3s" : ".8s"
                }
              >
                <img src={`/img/${partner.src}`} className={`icon ${partner.src}`} alt={`${partner.alt}`}/>
                <h6>{partner.title}</h6>
                <p>{partner.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {halfBG && <div className="half-bg bottom"></div>}
    </section>
  );
};

export default AnchoringPartners;
