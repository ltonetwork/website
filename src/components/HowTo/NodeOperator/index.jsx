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
              <div className="col-lg-6 light-purple-bg" style={{"padding": "30px"}}>
                <div>
                  <Split>
                    <h3
                      className="wow custom-font words chars splitting"
                      data-splitting
                    >
                      Mining
                    </h3>
                  </Split>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      <Link href="https://docs.ltonetwork.com/tutorials/mining/prepare-setup-your-wallet"><a target="_blank">Setting up your Node Wallets</a></Link>
                      <Link href="https://docs.ltonetwork.com/tutorials/mining/node-management"><a target="_blank">Node Management</a></Link>
                      <Link href="https://docs.ltonetwork.com/tutorials/mining/public-community-nodes"><a target="_blank">Public Community Nodes</a></Link>
                    </p>
                  </Split>
                </div>
              </div>
              <div className="col-lg-6 dark-purple-bg" style={{"padding": "30px"}}>
                <div>
                  <Split>
                    <h3
                      className="wow custom-font words chars splitting"
                      data-splitting
                    >
                      Running a Node
                    </h3>
                  </Split>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      <Link href="https://docs.ltonetwork.com/node/public-node"><a target="_blank">Public Node</a></Link>
                      <Link href="https://docs.ltonetwork.com/node/anchor-node"><a target="_blank">Anchor Node</a></Link>
                      <Link href="https://docs.ltonetwork.com/node/identity-node"><a target="_blank">Identity Node</a></Link>
                      <Link href="https://docs.ltonetwork.com/node/workflow-node"><a target="_blank">Workflow Node</a></Link>
                    </p>
                  </Split>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default NodeOperator;