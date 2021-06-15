/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/images/udemy-logo.svg";
import { FaGlobe } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='container'>
      <div className='js-pride-month-gradient'></div>
      <nav>
        <div className='logo'>
          <span>
            <a href=''>
              <img className='udemy-logo' src={logo} alt='' />
            </a>
          </span>
        </div>
        <div className='categories'>
          <a className='category' href='#'>
            Categories
          </a>
        </div>
        <div className='search-bar'>
          <form>
            <button>
              <i className='fas fa-search'></i>
            </button>
            <input type='text' placeholder='Search for anything' />
          </form>
        </div>
        <div className='other-udemies'>
          <div className='links'>
            <ul>
              <li>
                <a href='#'>Udemy for Business</a>
              </li>
              <li>
                <a href='#'>Teach on Udemy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='cart'>
          <div className='cart-content'>
            <a href=''>
              <i className='cart-icon fas fa-shopping-cart'></i>
            </a>
          </div>
        </div>
        <div className='nav-btns'>
          <div className='btn login-btn'>
            <a href='#'>Login</a>
          </div>
          <div className='btn sign-up-btn'>
            <a href='#'>Sign up</a>
          </div>
          <div className='lng-btn'>
            <i className='fas fa-globe'>{FaGlobe}</i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
