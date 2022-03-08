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
          <div className="logo">
            <a href="#0">
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
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className="text" data-splitting>
                <span className="menu-text">Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <Link href="/">
                        <span className="link">
                          <span className="nm">01.</span>Home
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/about">
                        <span className="link">
                          <span className="nm">02.</span>What is LTO Network?
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="https://docs.ltonetwork.com">
                        <a className="link">
                          <span className="nm">03.</span>HowTo &amp; Docs
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="https://blog.ltonetwork.com">
                        <a className="link">
                          <span className="nm">04.</span>News
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <CurrencyWidget />
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
                  <a className="icon" href="https://www.linkedin.com/company/ltonetwork/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a className="icon" href="https://github.com/ltonetwork">
                    <i className="fab fa-github"></i>
                  </a>
                  <a className="icon" href="https://www.youtube.com/channel/UCaHcF-xterKYTKSpY4xgKiw">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a className="icon" href="https://reddit.com/r/LTONetwork">
                    <i className="fab fa-reddit"></i>
                  </a>
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
