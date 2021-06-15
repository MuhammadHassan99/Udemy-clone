/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import image from "./images/image1.jpg";

const Business = () => {
  return (
    <>
      <div>
        <div className='business-wrapper'>
          <div className='background-div'>
            <div className='business-div'>
              <div className='business-content'>
                <h1>Udemy for business</h1>
                <p>
                  Get unlimited access to 5,500+ of Udemy’s top courses for your
                  team.
                </p>
                <a href=''>Get udemy for business</a>
              </div>
              <div className='image-div'>
                <img src={image} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='test'>
        <hr />
        <div className='video-content'>
          <div className='video-div'>
            <iframe
              title="Mohamad Alaloush's Story"
              src='https://www.youtube.com/embed/QFIhEmOd6No/?autoplay=1'
              frameBorder='0'
              width='560'
              height='315'
              allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
          <div className='vid-content'>
            <h1>Transform your life through education</h1>
            <p>
              Mohamad Alaloush launched a new career in software development by
              taking courses on Udemy. What will you be able to do?
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Business;
