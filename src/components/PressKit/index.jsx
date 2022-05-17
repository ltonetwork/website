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
        style={{ backgroundImage: `url(/img/presskit/background.jpg)` }}
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
                <span className="pb-20 light-purple-font">OUR PRESS KIT</span>
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

            <div className="col-lg-6 valign">
            <div className="content pl-0 pt-0" style={{"flex-grow":"1"}}>
              <ul className="feat">
                <li className="wow fadeInUp list-custom-style light-purple-bg row justify-content-center" data-wow-delay=".2s">
                  <h6 className = "col-lg-4 pl-15 valign">
                  Logos
                  </h6>
                  <div className="col-lg-4 valign"><Link href="/download/logos" style="position:absolute; right:0;">
                    <a
                      className={`btn-curve ${
                        theme == "light" ? "btn-blc" : "btn-lit"
                      } wow fadeInUp`}
                      data-wow-delay=".5s"
                    >
                      <span>Download</span>
                    </a>
                  </Link></div>
                </li>
                <li className="wow fadeInUp list-custom-style dark-purple-bg row justify-content-center" data-wow-delay=".2s">
                  <h6 className="col-lg-4 valign pl-15">
                  Fonts
                  </h6>
                  <div className="col-lg-4 valign"><Link href="/download/fonts" style="position:absolute; right:0;">
                    <a
                      className={`btn-curve ${
                        theme == "light" ? "btn-blc" : "btn-lit"
                      } wow fadeInUp`}
                      data-wow-delay=".5s"
                    >
                      <span>Download</span>
                    </a>
                  </Link></div>
                </li>
              </ul>
            </div>
          </div>
          
            
                      
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressKit;
