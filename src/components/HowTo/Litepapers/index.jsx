import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const Litepapers = () => {
    return (
        <section id="howTo--Litepapers" className="intro-section pt-60 pb-50 sub-bg">
          <div className="container lease-intro">
            <div className="htit mb-20 cont text-center">
              <span className="secondary-color subtitle">NFT 2.0</span>
              <h4 className="section-title">Litepaper</h4>
            </div>
            <img src="/img/how-to/litepaper.png" alt="" />
          </div>
          <div className="container pt-0 pb-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="content">
                  <h5>NFT2.0 Litepaper</h5>
                  <p><strong>LTO Network releases its NFT2.0 Litepaper which aims to fully decentralize NFTs and create true digital asset ownership through their “Ownables”</strong></p>
                  <p>Earlier in November, Dutch Blockchain LTO Network, known for their award winning enterprise solutions and partnerships with world leaders such as the United Nations, IBM, and the Dutch Government, revealed a roadmap for their mainnet upgrade known as TITANIUM.</p>
                  <p>With TITANIUM, the team at LTO Network aims to solve the growing issues and one of the most common problems content creators are facing with NFTs...the assets are not in your possession.</p>
                  <p>The first step in their development of this technology is the NFT2.0 Litepaper. Released today, it is an in-depth analysis of the technical solution to solving the issue of NFT centralization.</p>
                  <p>LTO Network issued NFTs are founded on two key components. The NFT2.0 Wallet and a new concept known as “Ownables”.</p>
                  <p><strong>“As LTO Network we can issue truly decentralized NFTs” - Rick Schmitz (CEO, LTO Network)</strong></p>

                  <h6>Ownables - A digital asset for the future</h6>
                  <p>Using their unique hybrid blockchain approach, LTO Network have documented their digital assets “Ownables” and how they will function.</p>
                  <p>Ownables can contain media files, images, songs, 3D models and much more. Whatever the content, the owner has full possession over the asset.</p>
                  <h6>NFT2.0 Wallet</h6>
                  <p>NFT2.0 is built around a decentralized wallet design which not only provides true possession, but also allows holders of “Ownables” to trade them directly with each other peer-to-peer.</p>
                  <p>The unique wallet allows issuers of NFTs to embed applications and widgets that provide additional functionality. This opens up a world of possibilities that have not yet been imagined.</p>
                  <blockquote>“With NFT2.0, the asset is truly in your possession. It sits in your wallet, on your phone or laptop and you have full control over it. You’re able to trade them with other users without the need for a 3rd party” - Arnold Daniels (LTO Network Lead Architect).</blockquote>
                  <p>Masterminded by Arnold Daniels, NFT2.0 technology was co-authored by music industry veteran turned LTO Network CMO, Shawn Naderi, who has worked behind the scenes with some of the world’s most renowned artists, carries a deep understanding of content & digital rights management that will be crucial for developing a solution for content creators facing a rapidly changing digital world.</p>
                  <p>NFT2.0 is set up to empower content creators, allowing them to create new revenue streams and ecosystems. This enables them to be better connected with fans & supporters, whilst having their rights protected.</p>
                  <blockquote>Today we will start with digital content, but in the future we will explore digital ownership of all kinds of real or non real world assets from real estate to anything you can imagine. - Shawn Naderi (Chief Marketing Officer LTO Network)</blockquote>
                  <h6>Read the full NFT2.0 Litepaper:</h6>
                  <p>
                    <Link href="https://ltonetwork.com/documents/LTO%20Network%20-%20TITANIUM.pdf">
                      <a target="_blank">
                        <img src="/img/how-to/litepaper-cover.png" alt="See Litepaper" />
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Litepapers;