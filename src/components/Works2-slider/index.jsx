/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Split from "../Split";

SwiperCore.use([Navigation]);

const Works2Slider = ({ subBG }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ionicons.min.css" />
      </Head>
      <section
        className={`work-carousel section-padding caroul ${
          subBG ? "sub-bg" : ""
        } position-re`}
      >
        <div className="container">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              2022 Development Roadmap
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Roadmap
              </h3>
            </Split>
            <span className="tbg">Roadmap</span>
          </div>
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <div className="swiper-container">
                  {!load ? (
                    <Swiper
                      speed={1000}
                      loop={false}
                      spaceBetween={0}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        767: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                        },
                      }}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                          navigationPrevRef.current;
                        swiper.params.navigation.nextEl =
                          navigationNextRef.current;
                      }}
                      onSwiper={(swiper) => {
                        setTimeout(() => {
                          swiper.params.navigation.prevEl =
                            navigationPrevRef.current;
                          swiper.params.navigation.nextEl =
                            navigationNextRef.current;

                          swiper.navigation.destroy();
                          swiper.navigation.init();
                          swiper.navigation.update();
                        });
                      }}
                      className="swiper-wrapper"
                      slidesPerView={1}
                    >
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div className="top-label">Q2 - 2022</div>
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-1.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>New Website - Stage 1</h6>
                            <h4>Stage 1 launch of LTO Network’s new website.</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-2.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>Proofi Launch</h6>
                            <h4>Our game changing identity solution, Proofi will be launched. </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                        <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-3.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>Partnership Announcement</h6>
                            <h4>A major partnership will be announced.</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                         <div className="top-label">Q3 - 2022</div>
                         
                          
                    
                        <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-4.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>TITANIUM Alpha</h6>
                            <h4>TITANIUM Alpha on the Testnet</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                          
                         
                        <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-5.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>Native Wallet Alpha</h6>
                            <h4>Native Wallet Alpha Version will be delivered.</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                        <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-3.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>New DeFi Partnership</h6>
                            <h4>A new partnership will be announced.</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                        
                        
                           
                       <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-7.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>NFT2.0 Partnership Announce</h6>
                            <h4>NFT2.0 Partnership Announcement - Media Focus.</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                        
                        
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-6.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>GoLand Registry</h6>
                            <h4>The 1st stage of GoLand Code Update will be announced and details provided.</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                          <div className="top-label">Q4 - 2022</div>
                        
                        
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-7.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>NFT2.0 Partnership</h6>
                            <h4>NFT2.0 Partnership Announcement</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                        
                         <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-8.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>Native Wallet Release</h6>
                            <h4>LTO Native Wallet will be released.</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                      
                        
                        
                         <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-9.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>Titanium Mainnet Update</h6>
                            <h4>Full release of our NFT2.0 Ownables tech.</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                        
                        
                         <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-10.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>Titanium Alloy</h6>
                            <h4>Mainnet Update.</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                        
                         
                         <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-11.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>NFT2.0 Partnership Announce</h6>
                            <h4>NFT2.0 Partnership Announcement - Artist Focus.</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                        
                        
                        
                        
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/about/roadmap-12.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>Embedded Smart Contracts</h6>
                            <h4>Mainnet Upgrade</h4>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  ) : null}

                  <div
                    ref={navigationNextRef}
                    className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-right"></i>
                  </div>
                  <div
                    ref={navigationPrevRef}
                    className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works2Slider;
