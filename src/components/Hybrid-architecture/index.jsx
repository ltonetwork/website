import React from "react";
import Split from "../Split";

const HybridArchitecture = () => {
  return (
    <section className="intro-section section-padding pb-0 sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Hybrid Architecture</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <span className="pb-20 light-purple-font">PRIVATE DATA, PUBLIC CONSENSUS</span>
                <p className="wow txt words chars splitting" data-splitting>
                What makes <em>LTO Network</em> unique is that it’s a hybrid blockchain with a public and private layer. All data being public is the very thing that makes blockchain special, but sometimes information needs to stay private.
                </p>			
                <p>A hybrid chain allows some information to be shared privately while still relying on public consensus to ensure integrity.</p> 
                <br/>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridArchitecture;
