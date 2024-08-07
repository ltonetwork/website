/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link"

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
    <section className="block-sec press-kit">
      <div
        className="background bg-img section-padding section-2023"
        style={{ backgroundImage: `url(/img/about/press-kit-bg.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 press-kit__content">
              <div className="vid-area">
                <div className="cont">
                  <h2 className="title-2023">Press Kit</h2>
                  <span className="mb-20 subtitle-2023">Our Press Kit and Branding Assets</span>
                  <p>LTO Network&apos;s branding should look clean, futuristic and minimal.</p>
                  <br/>
                  <p>You can access our latest branding elements here.</p>
                </div>
              </div>
            </div>  
            <div className="col-lg-6 valign">
              <div className="content pl-0 pt-0" style={{"flexGrow":"1"}}>
                <ul className="feat">
                  <li className="wow fadeInUp list-custom-style pink-bg d-flex justify-content-center" data-wow-delay=".2s">
                    <h6 className = "col-lg-4 pl-15 valign">
                    Logos
                    </h6>
                    <div className="col-lg-4 valign">
                      <Link href="/downloads/LTO_logos.zip" style="position:absolute; right:0;">
                        <a
                          className={`press-kit-btn btn-curve ${
                            theme == "light" ? "btn-blc" : "btn-lit"
                          } wow fadeInUp`}
                          data-wow-delay=".5s"
                          download
                        >
                          <span>Download</span>
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li className="wow fadeInUp list-custom-style dark-purple-bg d-flex justify-content-center" data-wow-delay=".2s">
                    <h6 className="col-lg-4 valign pl-15">
                    Fonts
                    </h6>
                    <div className="col-lg-4 valign">
                      <Link href="/downloads/LTO_fonts.zip" style="position:absolute; right:0;">
                        <a
                          className={`press-kit-btn btn-curve ${
                            theme == "light" ? "btn-blc" : "btn-lit"
                          } wow fadeInUp`}
                          data-wow-delay=".5s"
                          download
                        >
                          <span>Download</span>
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li className="wow fadeInUp list-custom-style cyan-bg d-flex justify-content-center" data-wow-delay=".2s">
                    <h6 className="col-lg-4 valign pl-15">
                    Style Guide
                    </h6>
                    <div className="col-lg-4 valign">
                      <Link href="/downloads/lto_style_guide_v1_1.pdf" style="position:absolute; right:0;">
                        <a
                          className={`press-kit-btn btn-curve ${
                            theme == "light" ? "btn-blc" : "btn-lit"
                          } wow fadeInUp`}
                          data-wow-delay=".5s"
                          target="_blank"
                          rel="nofollower"
                        >
                          <span>Download</span>
                        </a>
                      </Link>
                    </div>
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
