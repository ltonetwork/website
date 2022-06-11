/* eslint-disable @next/next/no-img-element */
import React from "react";
import ExchangesData from "../../data/howTo/exchanges.json";
import Split from "../Split";
import Link from 'next/link';

const Clients1 = ({ theme, subBG }) => {
  var first = ExchangesData.slice(0, ExchangesData.length / 2);
  var second = ExchangesData.slice(ExchangesData.length / 2, ExchangesData.length);
  return (
    <section className={`clients section-padding pt-10 ${subBG ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="sec-head custom-font mb-0 ml-0">
              <h6>Tutorials for</h6>
              <h3>Exchanges</h3>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div>
              <div className="row bord">
                {first.map((item) => (
                  <div key={item.id} className="col-md-4 col-6 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? ".3"
                          : item.id == 2
                          ? ".6"
                          : item.id == 3
                          ? ".8"
                          : item.id == 4
                          ? ".3"
                          : ""
                      }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <Link href={item.url}><a
                            target="_blank"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.name}
                          </a></Link>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {second.map((item) => (
                  <div key={item.id} className="col-md-4 col-6 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? ".4"
                          : item.id == 2
                          ? ".7"
                          : item.id == 3
                          ? ".5"
                          : item.id == 4
                          ? ".3"
                          : ""
                      }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <Link href={item.url}><a
                            target="_blank"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.name}
                          </a></Link>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients1;
