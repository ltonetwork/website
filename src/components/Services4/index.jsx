import React from "react";
import Split from "../Split";
import services4Data from "../../data/sections/services4.json";
import Link from "next/link";
const Services4 = ({ theme, withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section
      className={`services ${withPadding ? "section-padding" : ""} ${
        withBG ? "sub-bg" : ""
      } pt-30`}
    >
      <div className="container">
        {!withOutTitle && (
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Best Features
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Services.
              </h3>
            </Split>
            <span className="tbg">Services</span>
          </div>
        )}
        <div className="row">
          {services4Data.map((item, index) => (
            <div className="col-lg-4 col-md-4" key={item.id}>
              <div
                className={`item ${
                  index != services4Data.length - 1 ? "md-mb50" : ""
                } wow fadeInUp light-purple-border-top`}
                data-wow-delay={
                  item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s"
                }
              >
                <img src ={`/img/project-background/${item.src}`} className={`icon ${item.src}`} alt={`${item.alt}`}/>
                {/* <h6>{item.title}</h6> */}
                <Link href={`/${item.link}`} style="position:absolute; right:0;">
                    <a
                      className={`btn-curve ${
                        theme == "light" ? "btn-blc" : "btn-lit"
                      } wow fadeInUp`}
                      data-wow-delay=".5s"
                    >
                      <span>View</span>
                    </a>
                  </Link>
              </div>
            </div>
          ))}
        </div>
        <div className = "row justify-content-end pt-50">
        <div className="col-lg-3 d-flex">
          <Link href="/explore-projects" style="position:absolute; right:0;">
            <a
              className={`btn-curve ${
                theme == "light" ? "btn-blc" : "btn-lit"
              } wow fadeInUp`}
              data-wow-delay=".5s"
            >
              <span>Explore Projects</span>
            </a>
          </Link>
        </div>
        </div>
      </div>
      {halfBG && <div className="half-bg bottom"></div>}
    </section>
  );
};

export default Services4;
