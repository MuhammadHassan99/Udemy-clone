/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import image from "./image/image.jpg";

const Instructor = () => {
  return (
    <>
      <div className='instructor-wrapper'>
        <div className='background'>
          <div className='instructor-div'>
            <div className='div-image'>
              <img src={image} alt='' />
            </div>
            <div className='inst-content'>
              <h2>Become an instructor</h2>
              <p>
                Top instructors from around the world teach millions of students
                on Udemy. We provide the tools and skills to teach what you
                love.
              </p>
              <a href=''>Start teaching today</a>
            </div>
          </div>
        </div>
      </div>
      <div className='companies'>
        <hr />
        <div className='trusted-companies'>
          <h2>Trusted by companies of all sizes</h2>
          <div className='company-logo'>
            <div className='logo'>
              <img
                src={"https://s.udemycdn.com/partner-logos/booking-logo.svg"}
                alt=''
              />{" "}
            </div>
            <div className='logo'>
              <img
                src={"https://s.udemycdn.com/partner-logos/booking-logo.svg"}
                alt=''
              />
            </div>
            <div className='logo'>
              <img
                src={"https://s.udemycdn.com/partner-logos/booking-logo.svg"}
                alt=''
              />
            </div>
            <div className='logo'>
              <img
                src={"https://s.udemycdn.com/partner-logos/booking-logo.svg"}
                alt=''
              />
            </div>
            <div className='logo'>
              <img
                src={"https://s.udemycdn.com/partner-logos/booking-logo.svg"}
                alt=''
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Instructor;
