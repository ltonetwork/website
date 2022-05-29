import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import partnersDataNew from "../../data/partners/partnerDataNew.json";

SwiperCore.use([Navigation]);

const PartnerSlider = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="container">
      <div className="pb-60">
        <div className="swiper-container partner-carousel">
          {!load ? (
            <Swiper
              speed={1000}
              loop={false}
              spaceBetween={0}
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
                  <div
                    className="content wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    {partner.background != '' && <div className="swiper-slide__bg" style={{backgroundImage: `url(/img/partners/${partner.background})`}}></div>}
                    <div className="row swiper-slide__content">
                      <div className="col-lg-6">
                        <h2>{partner.partner}</h2>
                        <p className="partner-carousel__callout">{partner.callout}</p>
                        <p dangerouslySetInnerHTML={{__html: partner.content}}></p>
                        {partner.news_link != '' && <a className="btn-curve" href={partner.news_link}>View News</a>}
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
                        <img className="partner-carousel__logo" src={`/img/partners/${partner.logo}`} alt={partner.alt} />
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
  );
};

export default PartnerSlider;