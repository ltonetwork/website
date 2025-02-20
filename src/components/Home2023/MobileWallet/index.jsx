import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const MobileWallet = () => {
    return (
        <div id="wallet">
            <section id="home--MobileWallet" className="section-2023 pt-100 pb-100 mb-50">
                <div className="container">
                    <div className="flex-box">
                        <div className="flex-box__left__mw pb-30">
                            <img className="responsive-img" src="/img/home-2023/phone-screen.png" alt="Universal Wallet text in front of cube" />
                        </div>
                        <div className="flex-box__right__mw">
                            <h2 className="title-2023 mb-20">Universal Wallet Is Here</h2>
                            <p className="mb-20">A truly decentralized wallet for RWAs, tokenization, digital collectibles and media assets.</p>
                            <div className="links-container">
                                <Link href="https://apps.apple.com/us/app/lto-universal-wallet/id6448051682" target="_blank">
                                    <a className="store-link">
                                        <img src="/img/home-2023/apple-store500x300.png" alt="Download on the App Store" />
                                    </a>
                                </Link>
                                <Link href="https://play.google.com/store/apps/details?id=com2.ltonetwork.universal" target="_blank">
                                    <a className="store-link">
                                        <img src="/img/home-2023/play-store500x300.png" alt="Download on the Play Store" />
                                    </a>
                                </Link>
                            </div>
                            <Link href="/how-to#howTo--Wallet">
                                <a className="btn how-to-btn">How to use the Universal Wallet</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .flex-box {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }

                .flex-box__left__mw {
                    flex: 1;
                }

                .flex-box__right__mw {
                    flex: 1;
                }

                .links-container {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                }

                .store-link img {
                    max-width: 200px;
                    height: auto;
                }

                .how-to-btn {
                    font-size: 24px !important;
                    white-space: normal;
                    text-align: center;
                    width: 100%;
                    max-width: 400px;
                }

                @media (max-width: 768px) {
                    .flex-box {
                        flex-direction: column;
                        text-align: center;
                    }

                    .links-container {
                        justify-content: center;
                    }

                    .how-to-btn {
                        font-size: 20px !important;
                        margin: 0 auto;
                    }

                    .responsive-img {
                        max-width: 80%;
                        margin: 0 auto;
                    }
                }

                @media (max-width: 480px) {
                    .store-link img {
                        max-width: 160px;
                    }

                    .how-to-btn {
                        font-size: 18px !important;
                    }
                }
            `}</style>
        </div>
    );
}

export default MobileWallet;
