import React from "react";
import Split from "../Split";
import anchoringPartnersData from "../../data/sections/anchoring-partners.json";
import Link from "next/link"
const AnchoringPartners = ({ theme, withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section
      className={`services ${withPadding ? "section-padding" : ""} ${
        withBG ? "sub-bg" : ""
      }`}
    >
      <div className="container">
        <div className="row pt-30 pb-60">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
              <h4 className="wow fadeIn pt-15 pb-0" data-wow-delay=".5s">
            Partners Anchoring on LTO Network
            </h4>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <Link href="/contact/contact-dark">
              <a
                className={`btn-curve ${
                  theme == "light" ? "btn-blc" : "btn-lit"
                } wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>Get In Touch</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row section-padding pt-0">
          {anchoringPartnersData.map((partner, index) => (
            <div className="col-lg-4" key={partner.id}>
              <div
                className={`item ${
                  index != anchoringPartnersData.length - 1 ? "md-mb50" : ""
                } wow fadeInUp dark-purple-bg`}
                data-wow-delay={
                  partner.id == 1 ? ".5s" : partner.id == 2 ? ".3s" : ".8s"
                }
              >
                <img src={`/img/partners/${partner.src}`} className={`icon ${partner.src}`} alt={`${partner.alt}`}/>
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
