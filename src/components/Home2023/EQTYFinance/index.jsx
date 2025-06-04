import React from "react";
import Split from "../../Split";
import Link from 'next/link';

const EQTYFinance = () => {
    return (
        <div id="eqty">
            <section id="home--EQTYFinance" className="section-2023 pt-100 pb-100 mb-50">
                <div className="container">
                    <div className="flex-box">
                        <div className="flex-box__left__eqty">
                            <h2 className="title-2023 mb-20">EQTY Finance</h2>
                            {/* <p className="mb-20">A decentralized platform for real estate tokenization and investment, powered by LTO Network&apos;s blockchain technology.</p> */}
                            <p className="mb-20">The moment many of you have been waiting for has arrived. 

We are proud to officially unveil the EQTY Litepaper, which goes on a deep dive of our upcoming tokenization platform!</p>
                            <Link href="https://blog.ltonetwork.com/EQTY_Litepaper" target="_blank">
                                <a className="link-2023">Read the Litepaper</a>
                            </Link>
                        </div>
                        <div className="flex-box__right__eqty pb-30">
                            <img className="responsive-img" src="/img/eqty-logo.png" alt="EQTY Finance platform interface" />
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .flex-box {
                        display: flex;
                        gap: 2rem;
                        align-items: center;
                    }

                    .eqty-logo {
                        display: block;
                        max-width: 120px;
                        margin: 0 auto 16px auto;
                    }

                    .flex-box__left__eqty {
                        flex: 1;
                    }

                    .flex-box__right__eqty {
                        flex: 1;
                    }

                    .responsive-img {
                        max-width: 100%;
                        height: auto;
                    }

                    @media (max-width: 768px) {
                        .flex-box {
                            flex-direction: column;
                            text-align: center;
                        }
                        .eqty-logo {
                            max-width: 90px;
                            margin-bottom: 12px;
                        }
                        .flex-box__right__eqty {
                            order: -1;
                        }
                        .responsive-img {
                            max-width: 80%;
                            margin: 0 auto;
                        }
                    }
                `}</style>
            </section>
        </div>
    );
}

export default EQTYFinance; 