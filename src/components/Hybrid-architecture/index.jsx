import React from "react";
import Split from "../Split";
import layersData from "../../data/sections/layersdata.json";

const HybridArchitecture = () => {
  return (
    <section className="intro-section section-padding pt-20 pb-0 sub-bg hybrid">
      <div className="container hybrid__content">
        <div className="htit mb-20 cont">
          <h4 className="section-title">Hybrid Architecture</h4>
        </div>
        <div className="text">
          <Split>
            <span className="pb-20 secondary-color subtitle">PRIVATE DATA, PUBLIC CONSENSUS</span>
            <p className="wow txt words chars splitting" data-splitting>
            What makes <em>LTO Network</em> unique is that it’s a hybrid blockchain with a public and private layer. All data being public is the very thing that makes blockchain special, but sometimes information needs to stay private.
            </p>			
            <br/>
            <p>A hybrid chain allows some information to be shared privately while still relying on public consensus to ensure integrity.</p> 
          </Split>
        </div>
      </div>
      <div className="container pt-30 pb-70">
        <div className="row">
          <div className="col-lg-6 light-purple-bg" style={{"padding": "30px"}}>
            <div>
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  <h3>{layersData[0].title}</h3>
                </h4>
              </Split>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>{layersData[0].content}</p>
              </Split>
            </div>
          </div>
          <div className="col-lg-6 dark-purple-bg" style={{"padding": "30px"}}>
            <div>
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  <h3>{layersData[1].title}</h3>
                </h4>
              </Split>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>{layersData[1].content}</p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridArchitecture;
