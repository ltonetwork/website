/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/Link"

const PressKit = (theme) => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      
      <div
        className="background bg-img section-padding"
        style={{ backgroundImage: `url(/img/slid/1.jpg)` }}
        data-overlay-dark="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <div className="cont">
                  <h3 className="wow" data-splitting>
                  Press Kit
                  </h3>
                <span>Our Press Kit</span>
                <p>
                  LTO Network&apos;s branding should look clean, futuristic and minimal.
                </p>
                <br/>
                  <p>
                  Blah blah blah blah blah
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box row">
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    Logos
                  </h4>
            <Link href="/contact/contact-dark">
              <a
                className={`btn-curve ${
                  theme == "light" ? "btn-blc" : "btn-lit"
                } wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>Download</span>
              </a>
            </Link>
                </div>
              </div>
              <div className="testim-box">
                <div className="head-box row">
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    Fonts
                  </h4>
            <Link href="/contact/contact-dark">
              <a
                className={`btn-curve ${
                  theme == "light" ? "btn-blc" : "btn-lit"
                } wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>Download</span>
              </a>
            </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressKit;
