import React from "react";
import Split from "../../Split";
import Link from 'next/link';
import handleFullScreenBanner from "../../../common/handleFullScreenBanner";

// const Banner = () => {
const Banner = ({ theme, lr }) => {
    React.useEffect(() => {
        handleFullScreenBanner();
    }, []);
    return (
            <section id="home--Banner" className="section-2023 pt-60">
                <div className="container">
                    <div className="banner-container">
                        <Link href="https://apps.apple.com/us/app/lto-universal-wallet/id6448051682" target="_blank">
                            <a>
                            <img className="banner-link" src="/img/home-2023/apple-store500x300.png" alt="Download on the App Store"/>
                            </a>
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com2.ltonetwork.universal" target="_blank">
                            <a>
                            <img className="banner-link" src="/img/home-2023/play-store500x300.png" alt="Download on the Play Store"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
    );
}

export default Banner;
