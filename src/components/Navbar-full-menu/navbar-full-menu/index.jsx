/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Split from "../../Split";
import Link from "next/link";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";
import CurrencyWidget from "../../Currency-widget";

const NavbarFullMenu = ({ theme, lr }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    handleFullScreenNavbar();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""} ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="container-fluid">
          <div className="navbar-content">
            <div className="navbar-top">
              <div className="logo">
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
              <div className="nav-center desktop-download">
                <div className="download-buttons">
                  <Link href="https://apps.apple.com/us/app/lto-universal-wallet/id6448051682" target="_blank">
                    <a className="store-button">
                      <img src="/img/home-2023/apple-store500x300.png" alt="Download on the App Store" />
                    </a>
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=com2.ltonetwork.universal" target="_blank">
                    <a className="store-button">
                      <img src="/img/home-2023/play-store500x300.png" alt="Download on the Play Store" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="nav-right">
                <div className="menu-icon">
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
            </div>
            <div className="mobile-download">
              <div className="download-buttons">
                <Link href="https://apps.apple.com/us/app/lto-universal-wallet/id6448051682" target="_blank">
                  <a className="store-button">
                    <img src="/img/home-2023/apple-store500x300.png" alt="Download on the App Store" />
                  </a>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com2.ltonetwork.universal" target="_blank">
                  <a className="store-button">
                    <img src="/img/home-2023/play-store500x300.png" alt="Download on the Play Store" />
                  </a>
                </Link>
              </div>
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
                  <li>
                    <div className="o-hidden">
                      <Link href="/how-to">
                        <a className="link">
                          <span className="nm">03.</span>FAQs &amp; Technical Docs
                        </a>
                      </Link>
                    </div>
                  </li>
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

      <style jsx>{`
        #navi.topnav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1001;
          background: transparent;
          width: 100%;
          padding: 0 !important;
          height: auto !important;
          transition: background 0.3s ease;
        }
        #navi.topnav.scrolled {
          background: #000000;
        }
        .container-fluid {
          width: 100%;
          padding: 0;
          margin: 0;
          background: transparent;
        }
        .navbar-content {
          display: flex;
          flex-direction: column;
          width: 100%;
          background: transparent;
          margin: 0;
          padding: 0;
        }
        .navbar-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 10px;
          margin: 0;
          width: 100%;
          background: transparent;
          height: 60px;
        }
        .logo {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          margin: 0;
          padding: 0;
          height: 40px;
        }
        .logo img {
          height: 40px;
          width: auto;
          margin: 0;
          padding: 0;
        }
        .nav-center.desktop-download {
          display: flex;
        }
        .mobile-download {
          display: none;
        }
        .download-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .store-button img {
          height: 100px;
          width: auto;
          opacity: 0.9;
          transition: all 0.3s ease;
        }
        .store-button:hover img {
          opacity: 1;
          transform: translateY(-2px);
        }
        .nav-right {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 991px) {
          .navbar-top {
            flex-direction: row;
            align-items: flex-start;
            height: auto;
            padding: 5px 10px;
          }
          .nav-center.desktop-download {
            display: none;
          }
          .mobile-download {
            display: flex;
            justify-content: center;
            width: 100%;
            margin: 5px 0 0 0;
          }
          .download-buttons {
            gap: 10px;
          }
          .store-button img {
            height: 80px;
          }
        }
        @media (max-width: 480px) {
          .navbar-top {
            padding: 5px 5px;
          }
          .store-button img {
            height: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default NavbarFullMenu;
