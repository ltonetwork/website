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
                    Yes! You can find LTO Network’s mainnet wallet <Link href="https://wallet.lto.network"><a>here</a></Link>. LTO Network is also planning to launch a dedicated mobile wallet in 2022. For more information, please read the article on <Link href="https://blog.ltonetwork.com/wallet-partnership/"><a>Wallet Partnerships</a></Link>.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==2 ? 'active' : ''}`} data-wow-delay=".4s" onClick={ () => setActive(active == 2 ? null : 2) }>
                  <h6>
                    Is there a dedicated tech chat for LTO Network?
                  </h6>
                  <p style={ active==2 ? { display:'block'} : {display : 'none'} }>
                     Yes, please visit the LTO Network TechLab Telegram channel <Link href="https://t.me/ltotech"><a>here</a></Link>.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==3 ? 'active' : ''}`} data-wow-delay=".6s" onClick={ () => setActive(active == 3 ? null : 3) }>
                  <h6>
                    What is the maximum supply of LTO Network?
                  </h6>
                  <p style={ active==3 ? { display:'block'} : {display : 'none'} }>
                    LTO Network has a hard-coded maximum supply of 500M LTO. With a current total supply of around 400M LTO (as of June 2022) thanks to previous burn events, it is not expected that the maximum supply of 500M LTO will ever be reached again. As transactions on LTO Mainnet increase, LTO will be burned due to the transaction burn mechanism. When the amount of burned tokens overtakes the amount of minted tokens, LTO Network will become deflationary.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==4 ? 'active' : ''}`} data-wow-delay=".8s" onClick={ () => setActive(active == 4 ? null : 4) }>
                  <h6>
                    How much LTO is burned every day?
                  </h6>
                  <p style={ active==4 ? { display:'block'} : {display : 'none'} }>
                    The amount of LTO tokens burned depends on the amount of transactions taking place. Currently, 50% of the paid transaction costs are burned.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==5 ? 'active' : ''}`} data-wow-delay="1s" onClick={ () => setActive(active == 5 ? null : 5) }>
                  <h6>
                    How is APY established on LTO Network’s mainnet?
                  </h6>
                  <p style={ active==5 ? { display:'block'} : {display : 'none'} }>
                    The APY on LTO’s mainnet comes from two parts. First, a standard amount of LTO is minted as a reward. This amount decreases a tiny bit with every block and is only possible because LTO Network has burned over 100M LTO tokens in the past, creating space to mint new LTO while staying under the hard-coded supply limit of 500M LTO. The second part comes from the actual transactions on LTO Network’s mainnet. The costs paid for such transactions are partly burned and the remainder is distributed to the node as rewards.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==6 ? 'active' : ''}`} data-wow-delay=".8s" onClick={ () => setActive(active == 6 ? null : 6) }>
                  <h6>
                    Can I run a LTO mainnet node myself?
                  </h6>
                  <p style={ active==6 ? { display:'block'} : {display : 'none'} }>
                    Yes! LTO Network is a hybrid permissionless layer-1 blockchain that anyone can build on. You can start your own <Link href="https://docs.ltonetwork.com/node/public-node"><a>public</a></Link>, <Link href="https://docs.ltonetwork.com/node/anchor-node"><a>anchor</a></Link>, <Link href="https://docs.ltonetwork.com/node/identity-node"><a>identity</a></Link>, or <Link href="https://docs.ltonetwork.com/node/workflow-node"><a>workflow</a></Link> node.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==7 ? 'active' : ''}`} data-wow-delay=".8s" onClick={ () => setActive(active == 7 ? null : 7) }>
                  <h6>
                    How many LTO tokens do I need for my own LTO node to start mining?
                  </h6>
                  <p style={ active==7 ? { display:'block'} : {display : 'none'} }>
                    In order to activate mining, your LTO node needs at least 1000 LTO either directly in the node or leased to the node from another wallet. Leases take about 16.6 hours before they participate in the node balance. Depending on the current APY (which is equal across all nodes helping to secure LTO Network’s mainnet) and the costs of running your node, additional LTO tokens might need to be staked/leased in order to break even. Want to try on <Link href="https://docs.ltonetwork.com/node/public-node/installation-guide/lto_mainnet"><a>testnet</a></Link> first? Please do not hesitate to contact us in the <Link href="https://t.me/ltotech"><a>Techlab Telegram channel</a></Link> to get some LTO testnet tokens. 
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==8 ? 'active' : ''}`} data-wow-delay=".8s" onClick={ () => setActive(active == 8 ? null : 8) }>
                  <h6>
                    Where can I find the latest mainnet state?
                  </h6>
                  <p style={ active==8 ? { display:'block'} : {display : 'none'} }>
                    The latest mainnet state can be found <Link href="https://nodes.lto.network/api-docs/index.html"><a>here</a></Link>.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==9 ? 'active' : ''}`} data-wow-delay=".8s" onClick={ () => setActive(active == 9 ? null : 9) }>
                  <h6>
                    Does it matter if I lease my tokens or run my own node?
                  </h6>
                  <p style={ active==9 ? { display:'block'} : {display : 'none'} }>
                    It is your choice. Those that run their own node get 100% of the rewards, while leasing to a community node often involves a commission/node fee to the node owner. Anyone can start a (community) node and attract leasers to said node with their offered service. Those that run their own node are actively helping secure the LTO Network mainnet and are able to vote directly during consensus vote events like mainnet upgrades. Leasers are dependent on the vote of the community node they lease to, but can change their lease at any time to add their weight to another node if they do not agree with the cast vote.
                  </p>
                </li>
                <li className={`wow fadeInUp ${ active==10 ? 'active' : ''}`} data-wow-delay=".8s" onClick={ () => setActive(active == 10 ? null : 10) }>
                  <h6>
                    Is there a payout script available for community nodes?
                  </h6>
                  <p style={ active==10 ? { display:'block'} : {display : 'none'} }>
                    Yes, there is a community maintained payout script available for community nodes <Link href="https://github.com/justmvg/LTO_LPoSDistributor/"><a>here</a></Link>.
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
