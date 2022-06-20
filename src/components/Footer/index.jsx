/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import Mailchimp from 'react-mailchimp-form'

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half sub-bg pt-40 pb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </Link>
            </div>
            <ul>
              <li className="footer-title">Quick links</li>
              <li><Link href="/partners-clients/"><a className="footer-item">Partners &amp; Clients</a></Link></li>
              <li><Link href="/use-cases/"><a className="footer-item">Use cases</a></Link></li>
              <li><Link href="https://explorer.ltonetwork.com" target="_blank"><a className="footer-item">Explorer</a></Link></li>
              <li><Link href="https://wallet.lto.network" target="_blank"><a className="footer-item">Wallet</a></Link></li>
              <li><Link href="https://blog.ltonetwork.com/staking-and-leasing-lto-network-node-guide/" target="_blank"><a className="footer-item">Staking Guide</a></Link></li>
              <li><Link href="https://blog.ltonetwork.com/blockchain-adoption-real-world/" target="_blank"><a className="footer-item">Integrator Portal</a></Link></li>
              <li><Link href="https://research.binance.com/projects/lto-network/" target="_blank"><a className="footer-item">Binance Research</a></Link></li>
              <li><Link href="https://coinmarketcap.com/currencies/lto-network/" target="_blank"><a className="footer-item">CoinMarketCap</a></Link></li>
            </ul>
          </div>
          <div className="col-lg-5 offset-lg-1 mt-50 col-md-6">
            <ul>
              <li className="footer-title">Documents</li>
              <li><Link href="/documents/LTO%20Network%20-%20Identities%20Paper.pdf" target="_blank"><a className="footer-item">Identities Paper</a></Link></li>
              <li><Link href="/documents/LTO%20Network%20-%20Identities%20Tech.pdf" target="_blank"><a className="footer-item">Identities Technical Paper</a></Link></li>
              <li className="footer-title mt-20">GDPR</li>
              <li><Link href="/documents/privacy-policy.pdf"><a className="footer-item" target="_blank">Privacy Policy</a></Link></li>
              <li><Link href="/documents/cookie-statement.pdf"><a className="footer-item" target="_blank">Cookie Statement</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>General Inquiries : </span> <Link href="mailto:support@ltonetwork.com"><a>support@ltonetwork.com</a></Link>
                  </li>
                  <li>
                    <span>Press & Media Relations : </span> <Link href="mailto:press@ltonetwork.com"><a>press@ltonetwork.com</a></Link>
                  </li>
                  <li>
                    <span>Address : </span> LTO Network B.V. <br/>Helicopterstraat 25h, 1059 CE <br/>Amsterdam, Netherlands
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <Link href="https://twitter.com/TheLTONetwork">
                    <a className="icon" target="_blank" rel="nofollower">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </Link>
                  <Link href="https://t.me/ltonetwork">
                    <a className="icon" target="_blank" rel="nofollower">
                      <i className="fab fa-telegram"></i>
                    </a>
                  </Link>
                  <Link href="https://www.reddit.com/r/LTONetwork">
                    <a className="icon" target="_blank" rel="nofollower">
                      <i className="fab fa-reddit"></i>
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/c/LTONetwork">
                    <a className="icon" target="_blank" rel="nofollower">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/TheLTONetwork">
                    <a className="icon" target="_blank" rel="nofollower">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/theltonetwork/">
                    <a className="icon" target="_blank" rel="nofollower">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/ltonetwork/">
                    <a className="icon" target="_blank" rel="nofollower">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </Link>
                  <Link href="https://github.com/ltonetwork">
                    <a className="icon" target="_blank" rel="nofollower">
                      <i className="fab fa-github"></i>
                    </a>
                  </Link>
                  <Link href="https://blog.ltonetwork.com/">
                    <a className="icon" target="_blank" rel="nofollower">
                      <i className="fas fa-newspaper"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Mailchimp
                action='https://ltonetwork.us17.list-manage.com/subscribe/post?u=1508bdb96b4379a9aeb07c6e8&amp;id=dcfb5f7916'
                fields={[
                  {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                  }
                ]}
              />
            </div>
            <p className="pt-30">© 2022, LTO Network</p>
            <p>Incorporated by <Link href="https://www.firm24.com/bv-oprichten/"><a target="_blank" style={{color: "var(--lto-secondary)" }}>Firm24</a></Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
