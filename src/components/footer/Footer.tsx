/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/images/udemy-logo.svg";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='links-language-selector'>
        <div className='language'>
          <button className='language-selector'>
            <i className='fas fa-globe'></i>
            <span>English</span>
          </button>
        </div>
        <ul className='links'>
          <li>
            <a href=''>Udemy for business</a>
          </li>
          <li>
            <a href=''>Teach on Udemy</a>
          </li>
          <li>
            <a href=''>Get the app</a>
          </li>
          <li>
            <a href=''>About us</a>
          </li>
          <li>
            <a href=''>Contact us</a>
          </li>
        </ul>
        <ul className='links'>
          <li>
            <a href=''>Careers</a>
          </li>
          <li>
            <a href=''>Blogs</a>
          </li>
          <li>
            <a href=''>Help and Support</a>
          </li>
          <li>
            <a href=''>Affiliate</a>
          </li>
        </ul>
        <ul className='links'>
          <li>
            <a href=''>Terms</a>
          </li>
          <li>
            <a href=''>Privacy policy</a>
          </li>
          <li>
            <a href=''>Sitemap</a>
          </li>
        </ul>
      </div>
      <div className='logo-and-copyrights'>
        <div className='logo'>
          <span>
            <a href=''>
              <img className='udemy-logo' src={logo} alt='' />
            </a>
          </span>
        </div>
        <div className='copyrights'>© 2021 Udemy, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
