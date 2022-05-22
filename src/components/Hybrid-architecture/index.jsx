import React from "react";
import Split from "../Split";

const HybridArchitecture = () => {
  return (
    <section className="intro-section section-padding pt-50 pb-0 sub-bg">
      <div className="container">
            <div className="htit mb-20 cont">
              <h4 className="section-title">Hybrid Architecture</h4>
            </div>
            <div className="text">
              <Split>
                <span className="pb-20 secondary-color">PRIVATE DATA, PUBLIC CONSENSUS</span>
                <p className="wow txt words chars splitting" data-splitting>
                What makes <em>LTO Network</em> unique is that it’s a hybrid blockchain with a public and private layer. All data being public is the very thing that makes blockchain special, but sometimes information needs to stay private.
                </p>			
                <p>A hybrid chain allows some information to be shared privately while still relying on public consensus to ensure integrity.</p> 
                <br/>
              </Split>
            </div>
          </div>
    </section>
  );
};

export default HybridArchitecture;
