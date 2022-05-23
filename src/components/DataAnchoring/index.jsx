import React from "react";
import Split from "../Split";

const DataAnchoring = () => {
  return (
    <section className="intro-section pb-0 sub-bg">
      <div className="container">
            <div className="htit mb-20">
              <h4 className="section-title">Data Anchoring</h4>
            </div>
            <div className="text">
              <Split>
                <span className="pb-20 secondary-color subtitle">DATA AND DOCUMENTS, SAFE AND SECURE</span>
                <p className="wow txt words chars splitting" data-splitting>
                Anchoring provides a simple and cheap way to notarize documents, timestamp and verify data. It&apos;s one of the most fundamental uses of any blockchain  decentralized public ledger.

With LTO Network, data becomes tamper-proof. It becomes possible to prove the timestamp and show the document hasn&apos;t been modified. The data becomes anchored.
                </p>
              </Split>
            </div>
          </div>
    </section>
  );
};

export default DataAnchoring;
