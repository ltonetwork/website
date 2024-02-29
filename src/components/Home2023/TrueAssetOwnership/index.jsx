import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const TrueAssetOwnership = () => {
    return (
        <section id="home--TrueAssetOwnership" className="section-2023 pt-100">
          <div className="container">
            <h2 className="title-2023 mb-20">True RWA Ownership</h2>
            <p className="mb-40">Our network is built for Ownership.</p>
           {/* <!-- <p>Using our <span style={{ color:"#00FFFF" }}>hybrid architecture</span>, we have developed a world-class GDPR-compliant and privacy-aware suite of applications and an ecosystem that bring true decentralized ownership for real-world assets to the digital space.</p>--> */}
               
           <p>Our <span style={{ color:"#00FFFF" }}>2024</span> RWA Roadmap is here. We have revealed the world's most advanced ecosystem for RWAs, bringing true decentralized ownership for real-world assets to the digital space.</p>
            <img src="/img/home-2023/tao-graphic-v2.png" alt="Private Layer consists of Identity, Assets, and Tokenization while Public Layer consists of Secure and Verify"/>
            <Link href="https://blog.ltonetwork.com/rwa_roadmap/" target="_blank">
              <a className="link-2023 mt-50">2024 RWA ROADMAP</a>
            </Link>
          </div>
        </section>
    );
}

export default TrueAssetOwnership;
