import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const Proofi = () => {
    return (
        <section id="home--Proofi" className="section-2023 pt-100 pb-100">
          <div className="container">
            <div className="flex-box">
              <div className="flex-box__left">
                <h2 className="title-2023 mb-20">A Decentralized Future needs a Decentralized Identity</h2>
                <p className="mb-40">Our Proofi software provides KYC and AML compliance for Web3.0 Wallets whilst keeping sensitive data private.</p>
                <p>The data is available cross chain via ChainLink.</p>
              </div>
              <div className="flex-box__right pb-20">
                <img src="/img/home-2023/proofi-logo.png" className="proofi-logo" alt="Proofi text with checkmark in green circle" />
                <iframe width="560" height="250" src="https://www.youtube.com/embed/fL4_gpJf0_I?si=sXOnRsjiF-UtTGu3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>
            <Link href="https://blog.ltonetwork.com/proofi-chainlink-lto/">
              <a className="link-2023 mt-30" target="_blank">Read More</a>
            </Link>
          </div>
        </section>
    );
}

export default Proofi;
