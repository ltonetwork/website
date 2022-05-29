/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link"

const TitaniumLitePaper = (theme) => {
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
    <section className="block-sec sub-bg ownables">
      
      <div
        className="section-padding pt-40"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="wow mb-20 section-title" data-splitting>Ownables</h3>
            </div>
            <div className="col-lg-5">
              <div className="vid-area">
                <div className="cont">
                  <span className="pb-20 secondary-color subtitle">TRULY DECENTRALIZED DIGITAL COLLECTABLES</span>
                  <p>
                  Ownables can contain media files, images, songs, 3D models and much more. Whatever the content, the owner has full possession over the asset.
                  </p>
                  <br/>
                  <p>With NFT2.0, TITANIUM will empower content creators worldwide, such as artists, musicians, game developers (and more) to develop, build and expand their own worlds.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="testim-box" style={{ backgroundImage: `url(/img/titanium-litepaper/background.jpg)` }}>
                <div className="head-box">
                  <h4 className="wow fadeInLeft min-content-block" data-wow-delay=".5s">Titanium LitePaper</h4>
                  <Link href="https://ltonetwork.com/documents/LTO%20Network%20-%20TITANIUM.pdf">
                    <a
                      className={`btn-curve ${
                        theme == "light" ? "btn-blc" : "btn-lit"
                      } wow fadeInUp bg-color`}
                      data-wow-delay=".5s"
                    >
                      <span>Read Now</span>
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

export default TitaniumLitePaper;
