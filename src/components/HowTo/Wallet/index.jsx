import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const Wallet = ({ subBG }) => {
    return (
        <section id="howTo--Wallet" className={`intro-section pt-50 pb-10 ${subBG ? 'sub-bg' : ''}`}>
          <div className="container lease-intro">
            <div className="htit mb-20 cont text-center">
              <span className="secondary-color subtitle">HOW TO</span>
              <h4 className="section-title">Use the universal wallet</h4>
            </div>
          </div>
          <div className="container pt-10 pb-0">
            <div className="row">
              <div className="col-lg-4">
                <h5 style={{ color:"#00CCDD" }}>Sending and Receiving <br/> LTO Coins</h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FYFxMcsx9Nw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="col-lg-4">
                <h5 style={{ color:"#00CCDD" }}>Setup an existing wallet</h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FYFxMcsx9Nw"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="col-lg-4">
                <h5 style={{ color:"#00CCDD" }}>How to Use the Ownables </h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WGoy7V2gAHo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="col-lg-4">
                <h5 style={{ color:"#00CCDD" }}>How to Transfer an Ownable </h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nFkFLnq-EYM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="col-lg-4">
                <h5 style={{ color:"#00CCDD" }}>How to Create an Ownable </h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YZVkRijc_u8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Wallet;
