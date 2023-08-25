import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const YourWalletIsYou = () => {
    return (
        <section id="home--YourWalletIsYou" className="section-2023 pt-100 pb-100 mb-50">
          <div className="container">
            <div className="flex-box">
              <div className="flex-box__left">
                <h2 className="title-2023 mb-20">Your Wallet Is You</h2>
                <p className="mb-50">A multi-cypher advanced wallet with embedded CosmWasm smart-contract widgets and a decentralized identity mechanism.</p>
                <p>Your assets have full power.</p>
              </div>
              <div className="flex-box__right pb-30">
                <img src="/img/home-2023/universal-wallet.png" alt="Universal Wallet text in front of cube" />
                <Link href="https://blog.ltonetwork.com/the-lto-universal-wallet/" target="_blank">
                  <a className="link-2023 mt-30">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
    );
}

export default YourWalletIsYou;
