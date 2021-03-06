import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Keyboard, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import partnersDataNew from "../../data/partners/partnerDataNew.json";

SwiperCore.use([Navigation]);

const PartnerSlider = () => {
  // keep track of loading state
  const [load, setLoad] = React.useState(true);
  // keep track of swiper instances to destroy later
  const [mobile, setMobile] = React.useState(false);

  const breakpointChecker = function() {
    setMobile(window.matchMedia( '(max-width:767px)' ).matches);
  };

  React.useEffect(() => {
    window.matchMedia( '(max-width:767px)' ).addListener(breakpointChecker);
    // kickstart
    breakpointChecker();

    setTimeout(() => {
      // initialize load
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="partner-carousel-container mb-60">
      <div className="container">
        <div className="swiper-container partner-carousel">
          {!load && !mobile ? (
            <Swiper
              speed={1000}
              loop={false}
              spaceBetween={60}
              centeredSlides={true}
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
              {partnersDataNew.map((partner, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  {partner.background != '' && <div className="swiper-slide__bg" style={{backgroundImage: `url(/img/partners/${partner.background})`}}></div>}
                  <div
                    className="content wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="row swiper-slide__content">
                      <div className="col-lg-6">
                        <h2>{partner.partner}</h2>
                        <span className="pb-20 secondary-color subtitle">{partner.subtitle}</span>
                        <p className="partner-carousel__callout">{partner.callout}</p>
                        <p dangerouslySetInnerHTML={{__html: partner.content}}></p>
                        <img className="partner-carousel__logo" src={`/img/partners/${partner.logo}`} alt={partner.alt} />
                      </div>
                      <div className="col-lg-6 d-flex flex-column">
                        <h3>Project <span>Explorer</span></h3>
                        <ul>
                        {
                          partner.points.map((point, index2) => (
                            <li key={index2}>{point}</li>
                          ))
                        }
                        </ul>
                        {partner.news_link != '' && <a className="btn-curve btn-lit bg-color" target="_blank" rel="noreferrer" href={partner.news_link}><span>View News</span></a>}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <img src="/img/hero/down-arrow-glow.png" alt="Scroll left" />
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <img src="/img/hero/down-arrow-glow.png" alt="Scroll right" />
          </div>
        </div>
        {mobile ? (
          <div className="partner-carousel partner-carousel--mobile">
            {partnersDataNew.map((partner, index) => (
              <div className="swiper-slide swiper-slide-active" key={index}>
                <div
                  className="content wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  {partner.background != '' && <div className="swiper-slide__bg" style={{backgroundImage: `url(/img/partners/${partner.background})`}}></div>}
                  <div className="row swiper-slide__content">
                    <div className="col-lg-6">
                      <h2>{partner.partner}</h2>
                      <span className="pb-20 secondary-color subtitle">{partner.subtitle}</span>
                      <p className="partner-carousel__callout">{partner.callout}</p>
                      <p dangerouslySetInnerHTML={{__html: partner.content}}></p>
                      <img className="partner-carousel__logo" src={`/img/partners/${partner.logo}`} alt={partner.alt} />
                    </div>
                    <div className="col-lg-6">
                      <h3>Project <span>Explorer</span></h3>
                      <ul>
                      {
                        partner.points.map((point, index2) => (
                          <li key={index2}>{point}</li>
                        ))
                      }
                      </ul>
                      {partner.news_link != '' && <a className="btn-curve btn-lit bg-color" target="_blank" rel="noreferrer" href={partner.news_link}><span>View News</span></a>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PartnerSlider;