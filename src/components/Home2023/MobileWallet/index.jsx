import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const MobileWallet = () => {
    return (
        <section id="home--MobileWallet" className="section-2023 pt-100 pb-100 mb-50">
            <div className="container">
                {/* <div className="flex-box__nolink"> */}
                <div className="flex-box">
                    <div className="flex-box__left__mw pb-30">
                        <img src="/img/home-2023/phone-screen.png" alt="Universal Wallet text in front of cube" />
                    </div>
                    <div className="flex-box__right__mw">
                        <h2 className="title-2023 mb-20">Universal Wallet Is Here</h2>
                        <p className="mb-20">A truly decentralized wallet for RWAs, tokenization, digital collectibles and media assets.</p>
                        <div className="links-container">
                            <Link href="https://apps.apple.com/us/app/lto-universal-wallet/id6448051682" target="_blank">
                                <a>
                                <img src="/img/home-2023/apple-store500x300.png" alt="Download on the App Store" />
                                </a>
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com2.ltonetwork.universal" target="_blank">
                                <a>
                                <img src="/img/home-2023/play-store500x300.png" alt="Download on the Play Store" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileWallet;
