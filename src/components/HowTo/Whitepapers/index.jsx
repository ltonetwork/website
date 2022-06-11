import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const Whitepapers = () => {
    return (
        <section id="howTo--Whitepapers" className="intro-section pt-80 section-padding">
          <div className="container lease-intro">
            <div className="htit mb-20 cont text-center">
              <span className="secondary-color subtitle">LTO Network</span>
              <h4 className="section-title">Whitepapers</h4>
            </div>
          </div>
          <div className="container pt-10 pb-0">
            <div className="row">
              <div className="col-lg-3">
                <Link href="https://lto.network/documents/LTO%20Network%20-%20Technical%20Paper.pdf">
                  <a target="_blank" className="whitepaper-box"><span>Technical Paper</span></a>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link href="https://ltonetwork.com/documents/LTO%20Network%20-%20Identities%20Paper.pdf">
                  <a target="_blank" className="whitepaper-box"><span>Identities Paper</span></a>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link href="https://ltonetwork.com/documents/LTO%20Network%20-%20Identities%20Tech.pdf">
                  <a target="_blank" className="whitepaper-box"><span>Identities Tech</span></a>
                </Link>
              </div>
              <div className="col-lg-3">
                <Link href="https://blog.ltonetwork.com/litepaper/">
                  <a target="_blank" className="whitepaper-box"><span>Ownables Lite Paper</span></a>
                </Link>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Whitepapers;