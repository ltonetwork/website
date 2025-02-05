import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const Wallet = ({ subBG }) => {
    return (
        <section id="howTo--Wallet" className={`intro-section pt-50 pb-10 ${subBG ? 'sub-bg' : ''}`}>
          <div className="container lease-intro">
            <div className="htit mb-20 cont text-center">
              <span className="secondary-color subtitle">HOW TO</span>
              <h4 className="section-title">Use universal wallet</h4>
            </div>
          </div>
          <div className="container pt-10 pb-0">
            <div className="row">
              <div className="col-lg-4">
                <h5 style={{ color:"#00CCDD" }}>Wallet <br/> Create ownable</h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zhdFIyx6S8c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="col-lg-4">
                <h5 style={{ color:"#00CCDD" }}>Wallet install</h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hcn5uMv4bH8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="col-lg-4">
                <h5 style={{ color:"#00CCDD" }}>Wallet creating ownable </h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yKpQBa1oP98" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="col-lg-4">
                <h5 style={{ color:"#00CCDD" }}>Wallet sending ownable </h5>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yKpQBa1oP98" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Wallet;
