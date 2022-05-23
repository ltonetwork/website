import React from "react";
import Split from "../Split";
import layersData from "../../data/sections/layersdata.json";

const PrivatePublicLayers = ({ withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section className="min-area sub-bg section-padding pt-30 pb-70">
      <div className="container">
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
                <p className="wow txt words chars splitting" data-splitting>
                <p>{layersData[0].content}</p>
                </p>
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
                <p className="wow txt words chars splitting" data-splitting>
                <p>{layersData[1].content}</p>
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivatePublicLayers;
