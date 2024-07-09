import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const HybridPower = () => {
    return (
        <div id="about">
          <section id="home--HybridPower" className="section-2023 pt-60 pb-80">
            <div className="container">
              <h2 className="title-2023 mb-20">Layer 1 for Real World Assets & Privacy</h2>
              <p>LTO Network is a <span style={{ color:"#00FFFF" }}>Layer 1 blockchain</span> with a Public and Private layer to bridge the gap between real-world and digital ownership, decentralized identities, and privacy.</p>
              <h3 className="subtitle-2023 mt-70 mb-10">Key Metrics</h3>
              <div className="metric-boxes mt-40 mb-100">
                <div className="metric-boxes__item">
                  <span>2001</span>
                  <span>Days</span>
                  <p><strong>Mainnet</strong> Uptime</p>
                </div>
                <div className="metric-boxes__item">
                  <span>93</span>
                  <p><strong>Total</strong> Nodes</p>
                </div>
                <div className="metric-boxes__item">
                  <span>172mil</span>
                  <p><strong>Staked</strong> Coins</p>
                </div>
                <div className="metric-boxes__item">
                  <span>250k+</span>
                  <span>(weekly)</span>
                  <p><strong>Operations</strong></p>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}

export default HybridPower;
