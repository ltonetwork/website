import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const Lease = () => {
    return (
        <section id="howTo--Lease" className="intro-section pt-50 pb-70 section-padding sub-bg">
          <div className="container lease-intro">
            <div className="htit mb-20 cont text-center">
              <span className="secondary-color subtitle">HOW TO</span>
              <h4 className="section-title">Lease</h4>
            </div>
            <Split>
              <p className="wow txt words chars splitting" data-splitting><strong>Any holder can support and secure the network and be rewarded for it</strong> by the Leased Proof of Stake algorithm.</p>
              <p className="wow txt words chars splitting" data-splitting>You can run a node and stake LTO. But if you are not tech-savvy, you can just lease to another node, which is like delegating while keeping full control over your tokens.</p>
            </Split>
            <h5 className="mt-30">Leasing LTO to other nodes</h5>
          </div>
          <div className="container min-area pt-10 pb-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="content dark-purple-bg">
                  <Split>
                    <p className="wow txt words chars splitting pb-30" data-splitting>With the traditional Proof of Stake algorithm, it’s important to have a big wallet: only people with a certain amount of tokens can run a node and forge blocks on the blockchain. With LTO Network’s Leased Proof of Stake, token holders can lease any amount of LTO to someone who is running a public/community node.</p>
                    <p className="wow txt words chars splitting" data-splitting>Most <strong>node operators will share a percentage of their node rewards with their leasers.</strong> The higher the leased amount of a node is, the more chance it has in being eligible to forge the new block. If the block has transactions, the mining node will earn the fees from those transactions, next to the base rewards that were established in LTO Network’s JUICY mainnet update.</p>
                  </Split>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content light-purple-bg">
                  <Split>
                      <p className="wow txt words chars splitting" data-splitting>When leasing, you are not transferring your tokens to someone else. <strong>Your tokens stay in your wallet.</strong> So you cannot lose your LTO this way, it’s SAFU.</p>
                  </Split>
                  <ul className="pt-30">
                    <li className="wow fadeInUp" data-wow-delay=".2s">
                      <p className="pl-0">Buy LTO on the <Link href="https://coinmarketcap.com/currencies/lto-network/markets/"><a target="_blank">exchange of your choosing.</a></Link></p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      <p className="pl-0">Create a <Link href="https://wallet.lto.network/start"><a target="_blank">mainnet wallet</a></Link>. Make sure to save your seed phrase!</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".6s">
                      <p className="pl-0">Transfer LTO to your mainnet wallet</p>
                      <ul>
                        <li><p>If the exchange supports mainnet LTO, you can directly transfer the coins to your mainnet wallet.</p></li>
                        <li><p>In case it supports ERC-20 LTO only, you can swap ERC-20 LTO to mainnet LTO using the <Link href="https://blog.ltonetwork.com/bridge-troll-lto/"><a target="_blank">Bridge</a></Link> inside the wallet.</p></li>
                      </ul>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".8s">
                      <p className="pl-0">Go to your wallet and press lease… and you are set up!</p>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="1s">
                      <p className="pl-0">Unleashing your LTO is just as simple, but keep in mind that a 3000 blocks unbonding period is in place. This means you can move your LTO tokens after approximately 2 days after you stop your lease.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="pink-bg">
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>View the full list of Public Lease Nodes - <Link href="https://docs.google.com/spreadsheets/d/1R9OPQxW9dD9anq217ffm9sXINV_xKTNNaiHcY_eOWmw/edit?usp=sharing"><a target="_blank">here</a></Link>.</p>
                    <p className="wow txt words chars splitting" data-splitting><strong>Every node is like its own miniature community, it’s awesome!</strong> Check out different node operators, chat with them, and see who you like to join.</p>
                  </Split>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Lease;