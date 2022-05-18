import React from "react";
import Split from "../Split";
import layersData from "../../data/sections/layersdata.json";
import Link from "next/link"
const DownloadFontsAndLogos = ({ theme, withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section className="min-area sub-bg">
      <div className="container section-padding">
        <div className="row">
          <div className="col-lg-6 valign sub-bg">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  <h3>Please Download</h3>
                </h4>
              </Split>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                <p>Blah blah any paragraph content you want here</p>
                </p>
              </Split>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                  Logos
                  </h6>
                  <p>
                  Allowing LTO Network to be used as an identity platform.
Any account can be resolved as DID. Multiple ciphers/curves
are supported (natively).
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                  Fonts
                  </h6>
                  <p>
                  Decentralized revocation registry for verifiable credentials.
                  Verifiable presentations can be shared over private layer to
                  comply with GDPR. 
                  </p>
                </li>
                <li>
                  <Link href="/contact/contact-dark">
                    <a
                      className={`btn-curve ${
                        theme == "light" ? "btn-blc" : "btn-lit"
                      } wow fadeInUp`}
                      data-wow-delay=".5s"
                    >
                      <span>Get In Touch</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadFontsAndLogos;
