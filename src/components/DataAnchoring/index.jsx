import React from "react";
import Split from "../Split";

const DataAnchoring = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Data Anchoring</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <span className="pb-20 light-purple-font">DATA AND DOCUMENTS, SAFE AND SECURE</span>
                <p className="wow txt words chars splitting" data-splitting>
                Anchoring provides a simple and cheap way to notarize documents, timestamp and verify data. It&apos;s one of the most fundamental uses of any blockchain  decentralized public ledger.

With LTO Network, data becomes tamper-proof. It becomes possible to prove the timestamp and show the document hasn&apos;t been modified. The data becomes anchored.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnchoring;
