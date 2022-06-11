import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const Integrator = () => {
    return (
        <section id="howTo--Integrator" className="intro-section pt-50 pb-50 sub-bg">
          <div className="container integrator-intro">
            <div className="htit mb-20 cont text-center">
              <span className="secondary-color subtitle">HOW TO BECOME A</span>
              <h4 className="section-title">Integrator</h4>
            </div>
            <Split>
              <p className="wow txt words chars splitting" data-splitting>LTO Network is a hybrid blockchain for securing, exchanging and verification of digital assets. Our mission is to build cutting edge solutions that promote decentralization across B2B, consumer and crypto to crypto use cases.</p>
              <p className="wow txt words chars splitting" data-splitting>LTO Network can be used by any company, institution or supply chain with a need for a production-ready blockchain that enables verification of business critical information and collaboration through the use of decentralized workflows.</p>
            </Split>
          </div>
          <div className="container min-area pt-30 pb-60">
            <div className="row">
              <div className="col-lg-6">
                <div className="content dark-purple-bg">
                  <h5>LTO Network is enterprise ready.</h5>
                  <ul className="feat pt-30">
                    <li className="wow fadeInUp" data-wow-delay=".2s">
                      <p className="pl-0">Active partnerships with global businesses and institutions including the <Link href="https://blog.ltonetwork.com/united-nations-and-lto-network-release-worlds-first-open-source-land-registry/"><a target="_blank">United Nations</a></Link> (Digital Land Registry), Dutch government <Link href="https://ltonetwork.com/use-cases/"><a target="_blank">and more</a></Link>.</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      <p className="pl-0">Built for Business & Projects - Decentralized workflows on the private layer. GDPR compliant and easy to integrate. Plus competitive and stable transaction costs.</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".6s">
                      <p className="pl-0">Protect important data through fast immutable timestamps. Provide indisputable proof of existence by securing a hash on the LTO Network public blockchain.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/img/how-to/integrator-1.png" alt="Integrator 1" />
                <img src="/img/how-to/integrator-2.png" alt="Integrator 2" />
              </div>
            </div>
          </div>
        </section>
    );
}

export default Integrator;