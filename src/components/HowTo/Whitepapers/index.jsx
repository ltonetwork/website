/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import whitepaperData from "../../../data/howTo/whitepapers.json";

class Whitepapers extends React.Component {
  constructor(props) {
    super(props);

    this.checkScroll = this.checkScroll.bind(this);
  }

  checkScroll() {
    const $slider = document.querySelector('.team-container');
    const wTop = window.pageYOffset || document.documentElement.scrollTop;
    const sTop = wTop + $slider.getBoundingClientRect().bottom;
    const wHeight = window.innerHeight;
    const wTrigger = wTop + wHeight;

    if (wTrigger > sTop) {
      this.slider.slickPlay();
    } else {
      this.slider.slickPause();
    }    
  }

  componentDidMount() {
    window.addEventListener('scroll',this.checkScroll);
    this.checkScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.checkScroll);
  }

  renderArrows = () => {
    return (
      <div className="navs mt-30 wow fadeInUp" data-wow-delay=".3s">
        <span
          className="prev cursor-pointer"
          onClick={() => this.slider.slickPrev()}
        >
          <i className="fas fa-chevron-left"></i>
        </span>
        <span
          className="next cursor-pointer"
          onClick={() => this.slider.slickNext()}
        >
          <i className="fas fa-chevron-right"></i>
        </span>
      </div>
    );
  };

  render() {
    return (
      <section className="team section-padding" id="howTo--Whitepapers">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="full-width">
                <div className="sec-head custom-font mb-0">
                  <h3 style={{'lineHeight':"1em"}}>Whitepapers</h3>
                  <p>Learn more about LTO</p>
                </div>
                {this.renderArrows()}
              </div>
            </div>
            <div className="col-lg-6">
              <Slider
                className="team-container"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  autoplay: false,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                  ],
                }}
              >
                {whitepaperData.map((item) => (
                  <Link href={item.link}
                      key={item.id}>
                    <a
                      target="_blank"
                      className={`item wow fadeInUp item--noFade`}
                      data-wow-delay=".3s"
                    >
                      <div className="img wow imago">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="info" style={{"backgroundColor": item.color}}>
                        <h5>{item.name}</h5>
                      </div>
                    </a>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Whitepapers;
