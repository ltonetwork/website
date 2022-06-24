/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import featuresEffect from "../../../common/featuresEffect";
import { thumparallaxDown } from "../../../common/thumparallax";
import Split from "../../Split";
import Link from 'next/link';

const FAQ = () => {
  const [ active, setActive ] = useState(null);
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section id="howTo--FAQ" className="pt-80 pb-80 min-area sub-bg" style={{
          backgroundImage: "url(/img/how-to/faq-bg.jpg)",
          backgroundPosition: "center top", 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "100%"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 valign">
            <div className="content pb-0 pt-0">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                  style={{fontWeight: "300"}}
                >
                  Frequently <strong>Asked Questions</strong>
                </h4>
              </Split>
              <ul className="feat mt-50">
                <li className={`wow fadeInUp ${ active==1 ? 'active' : ''}`} data-wow-delay=".2s" onClick={ () => setActive(active == 1 ? null : 1) }>
                  <h6>
                    Is there a dedicated LTO Network wallet?
                  </h6>
                  <p style={ active==1 ? { display:'block'} : {display : 'none'} }>
                    Yes! You can find LTO Network’s mainnet wallet here: https://wallet.lto.network. LTO Network is also planning to launch a dedicated mobile wallet in 2022. For more information, please read the blog: https://blog.ltonetwork.com/wallet-partnership/
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==2 ? 'active' : ''}`} data-wow-delay=".4s" onClick={ () => setActive(active == 2 ? null : 2) }>
                  <h6>
                    Where can i get the link for last mainnet state?
                  </h6>
                  <p style={ active==2 ? { display:'block'} : {display : 'none'} }>
                    The last mainnet state can be found <Link href="https://nodes.lto.network/api-docs/index.html"><a>here</a></Link>.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==3 ? 'active' : ''}`} data-wow-delay=".6s" onClick={ () => setActive(active == 3 ? null : 3) }>
                  <h6>
                    What is the incentive to run my own full node instead of leasing my coins?
                  </h6>
                  <p style={ active==3 ? { display:'block'} : {display : 'none'} }>
                    More revenue if you have enough people leasing to you and payout is not 100%. Also you can provide services on LTO Network with your node. Running a node might be profitable later on but it&apos;s not at the moment. If it is it&apos;s only marginal.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==4 ? 'active' : ''}`} data-wow-delay=".8s" onClick={ () => setActive(active == 4 ? null : 4) }>
                  <h6>
                    I want to automatically send my tokens to multiple wallets on the LTO platform. Is there a program or bot?
                  </h6>
                  <p style={ active==4 ? { display:'block'} : {display : 'none'} }>
                    Yes, there are payout scripts that are used by node owners to pay leasers. These can also be used/adjusted to do other automated transfers, for example: <Link href="https://github.com/justmvg/LTO_LPoSDistributor"><a>LTO_LPoSDistributor</a></Link>.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==5 ? 'active' : ''}`} data-wow-delay="1s" onClick={ () => setActive(active == 5 ? null : 5) }>
                  <h6>
                    Is there a dedicated tech chat for LTO Network?
                  </h6>
                  <p style={ active==5 ? { display:'block'} : {display : 'none'} }>
                    Yes, please visit the LTO Network TechLab Telegram channel <Link href="https://t.me/ltotech"><a>here</a></Link>.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
