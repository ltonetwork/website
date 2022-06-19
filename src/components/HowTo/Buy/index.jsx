import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const Buy = ({ subBG }) => {
    return (
        <section id="howTo--Buy" className={`intro-section pt-50 pb-10 ${subBG ? 'sub-bg' : ''}`}>
          <div className="container lease-intro">
            <div className="htit mb-20 cont text-center">
              <span className="secondary-color subtitle">HOW TO</span>
              <h4 className="section-title">Buy Sell and Stake LTO</h4>
            </div>
          </div>
          <div className="container pt-10 pb-0">
            <div className="row">
              <div className="col-lg-4">
                <h5>Buying LTO on <br/>a Centralized Exchange</h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eecw2ImHWlM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="col-lg-4">
                <h5>Buying LTO on a DEX</h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eecw2ImHWlM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="col-lg-4">
                <h5>How to Lease/Stake LTO on our mainnet</h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eecw2ImHWlM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Buy;