import React from "react";
import Split from "../Split";
import Link from "next/link";

const AboutIntro = () => {
  return (
    <section id="about" className="about-intro">
      <div className="about-intro__bg"></div>
      <div className="container">
        <h2>What is LTO Network?</h2>
        <div className="about-intro__text">
          <p>LTO network is an award winning <span>HYBRID BLOCKCHAIN</span></p>
          <p>It can be used to <span>Secure, Exchange & Verify</span> critical data digital assets and identities.</p>
        </div>
        <div className="about-intro__mission">
          <h3>Our Mission</h3>
          <div className="about-intro__mission__statement">“Build the leading platform for cutting edge next generations blockchain apps that focus on identities, media and ownership.”</div>
        </div>
        <div className="about-intro__partners">
          <h3>Our Network Has Been Used By</h3>
          <div className="about-intro__partners__inner">
            <img src="/img/partners/un-logo.png" alt="UN Logo" style={{width:100,height:91}} />
            <img src="/img/partners/nen-logo.png" alt="NEN Logo" style={{width:115,height:68}} />
            <img src="/img/partners/signrequest-logo.png" alt="SignRequest Logo" style={{width:225,height:58}} />
            <img src="/img/partners/ibm-logo.png" alt="IBM Logo" style={{width:119,height:47}} />
            <img src="/img/partners/govned-logo.png" alt="Government of the Netherlands Logo" style={{width:159,height:61}} />
            <img src="/img/partners/cloud9-logo.png" alt="Cloud 9 Logo" style={{width:173,height:87}} />
          </div>
          <div className="text-center mt-50">
            <Link href="/partnerships">
              <a className="btn-curve btn-lit bg-color"><span>Explore Projects</span></a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
