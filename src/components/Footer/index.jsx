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
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src={`${appData.lightLogo}`} alt="" />
                  </a>
                </Link>
              </div>
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
            <div className="subscribe mt-50 mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>Sign up for our newsletter!</p>
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
            <p className="pt-60">© 2022, LTO Network</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
