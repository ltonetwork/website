/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../Split";
import Link from "next/link";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";
import CurrencyWidget from "../../Currency-widget";

const NavbarFullMenu = ({ theme, lr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="navbar-header-block">
            <div className="navbar-header-block-row">
              <div className="navbar-logo flex-seq logo-seq" style={{ order: 1 }}>
                <Link href="/">
                  <a>
                    {theme ? (
                      theme === "light" ? (
                        <img src={`${appData.darkLogo}`} alt="logo" />
                      ) : (
                        <img src={`${appData.lightLogo}`} alt="logo" />
                      )
                    ) : (
                      <img src={`${appData.lightLogo}`} alt="logo" />
                    )}
                  </a>
                </Link>
              </div>
              <div className="menu-icon flex-seq menu-seq" style={{ order: 3 }}>
                <span className="icon">
                  <i></i>
                  <i></i>
                </span>
                <Split>
                  <span className="text" data-splitting style={{ paddingTop: '4px' }}>
                    <span className="menu-text">Menu</span>
                  </span>
                </Split>
              </div>
            </div>
            <div className="navbar-download-center flex-seq download-seq" style={{ order: 2 }}>
              <a href="https://apps.apple.com/app/lto-wallet/id6447391863" target="_blank" rel="noopener noreferrer" className="btn-download btn-app-store">
                <i className="fab fa-apple me-2"></i>
                App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.ltonetwork.wallet" target="_blank" rel="noopener noreferrer" className="btn-download btn-play-store">
                <i className="fab fa-google-play me-2"></i>
                Play Store
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <Link href="/">
                        <a className="link">
                          <span className="nm">01.</span>Home
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a href="https://blog.ltonetwork.com" rel="noopener noreferrer" target="_blank">
                          <a className="link">
                            <span className="nm">02.</span>Blog &amp; News
                          </a>
                      </a>
                    </div>
                  </li>
                  {/* <li>
                    <div className="o-hidden">
                      <Link href="/#about">
                        <a className="link">
                          <span className="nm">02.</span>What is LTO Network?
                        </a>
                      </Link>
                    </div>
                  </li> */}
                  <li>
                    <div className="o-hidden">
                      <Link href="/how-to">
                        <a className="link">
                          <span className="nm">03.</span>FAQs &amp; Technical Docs
                        </a>
                      </Link>
                    </div>
                  </li>
                  {/* <li>
                    <div className="o-hidden">
                      <Link href="/partnerships">
                        <a className="link">
                          <span className="nm">05.</span>Partnerships & Projects
                        </a>
                      </Link>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="cont-info">
                <div className="item">
                  <CurrencyWidget />
                </div>
                <div className="item mb-10">
                  <Link href="https://explorer.lto.network/dashboard">
                    <a className="d-flex align-items-center" target="_blank">
                      <img src="/img/explorer-icon.png" alt="" style={{ width: 20, marginRight: 8 }} /> LTO Explorer
                    </a>
                  </Link>
                </div>
                <div className="item">
                  <Link href="https://wallet.lto.network/">
                    <a className="d-flex align-items-center" target="_blank">
                      <img src="/img/wallet-icon.png" alt="" style={{ width: 20, marginRight: 8 }} /> LTO Wallet
                    </a>
                  </Link>
                </div>
                <div className="item">
                  <h6>Telegram</h6>
                  <p><a href="https://t.me/ltonetwork">@ltonetwork</a></p>
                </div>
                <div className="item">
                  <h6>Twitter</h6>
                  <p><a href="https://twitter.com/theltonetwork">@TheLTONetwork</a></p>
                </div>
                <div className="item social-icon">
                  <Link href="https://twitter.com/TheLTONetwork">
                    <a className="icon mb-10" target="_blank" rel="nofollower">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </Link>
                  <Link href="https://t.me/ltonetwork">
                    <a className="icon mb-10" target="_blank" rel="nofollower">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </Link>
                  <Link href="https://www.reddit.com/r/LTONetwork">
                    <a className="icon mb-10" target="_blank" rel="nofollower">
                      <i className="fab fa-reddit"></i>
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/c/LTONetwork">
                    <a className="icon mb-10" target="_blank" rel="nofollower">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/TheLTONetwork">
                    <a className="icon mb-10" target="_blank" rel="nofollower">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/theltonetwork/">
                    <a className="icon mb-10" target="_blank" rel="nofollower">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/ltonetwork/">
                    <a className="icon mb-10" target="_blank" rel="nofollower">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </Link>
                  <Link href="https://github.com/ltonetwork">
                    <a className="icon mb-10" target="_blank" rel="nofollower">
                      <i className="fab fa-github"></i>
                    </a>
                  </Link>
                  <Link href="https://blog.ltonetwork.com/">
                    <a className="icon mb-10" target="_blank" rel="nofollower">
                      <i className="fas fa-newspaper"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
