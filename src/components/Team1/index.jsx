/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team1Data from "../../data/sections/team1.json";

class Team1 extends React.Component {
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
      <section className="team section-padding section-2023">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 valign">
              <div className="full-width">
                <div className="sec-head custom-font mb-0">
                  <h2 className="title-2023">Team</h2>
                  <p>Meet the vibrant team behind LTO Network</p>
                </div>
                {this.renderArrows()}
              </div>
            </div>
            <div className="col-lg-9">
              <Slider
                className="team-container"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  autoplay: false,
                  slidesToScroll: 1,
                  slidesToShow: 4,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 4,
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
                {team1Data.map((item) => (
                  <div
                    className={`item wow fadeInUp ${item.linkedin=='' && item.twitter=='' ? 'item--noFade' : ''}`}
                    data-wow-delay=".3s"
                    key={item.id}
                  >
                    <div className="img wow imago">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="info" style={{"backgroundColor": item.color}}>
                      <h5>{item.name}</h5>
                      <span>{item.title}</span>
                      <div className="social">
                        {item.linkedin ? <Link href={item.linkedin}>
                          <a>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </Link> : ''}                        
                        {item.twitter ? <Link href={item.twitter}>
                          <a>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </Link> : ''}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team1;
