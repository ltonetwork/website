import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const NodeOperator = () => {
    return (
        <section id="howTo--NodeOperator" className="intro-section section-padding pt-60 pb-40">
          <div className="container">
            <div className="htit cont text-center">
              <span className="secondary-color subtitle">HOW TO BECOME A</span>
              <h4 className="section-title">Node Operator</h4>
            </div>
          </div>
          <div className="container pt-30 pb-30">
            <div className="row">
              <div className="col-lg-3" style={{"padding": "30px"}}>
                <Link href="https://docs.ltonetwork.com/node/public-node">
                  <a target="_blank">
                    <img src="/img/how-to/node-1.png" alt="" />
                    <span>Public Node</span>
                  </a>
                </Link>
              </div>
              <div className="col-lg-3" style={{"padding": "30px"}}>
                <Link href="https://docs.ltonetwork.com/node/anchor-node">
                  <a target="_blank">
                    <img src="/img/how-to/node-2.png" alt="" />
                    <span>Anchor Node</span>
                  </a>
                </Link>
              </div>
              <div className="col-lg-3" style={{"padding": "30px"}}>
                <Link href="https://docs.ltonetwork.com/node/identity-node">
                  <a target="_blank">
                    <img src="/img/how-to/node-3.png" alt="" />
                    <span>Identity Node</span>
                  </a>
                </Link>
              </div>
              <div className="col-lg-3" style={{"padding": "30px"}}>
                <Link href="https://docs.ltonetwork.com/node/workflow-node">
                  <a target="_blank">
                    <img src="/img/how-to/node-4.png" alt="" />
                    <span>Workflow Node</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
    );
}

export default NodeOperator;