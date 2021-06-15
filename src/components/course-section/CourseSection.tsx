/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import courseImage from "../../assets/images/course-image.jpg";
import cardImage1 from "./images/card-image.jpg";
import cardImage2 from "./images/card-2.jpg";
import cardImage3 from "./images/card-3.jpg";
import cardImage4 from "./images/card-4.jpg";
import Slider from "react-slick";

const CourseSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className='course-section-container'>
      <div className='headline'>
        <h1 className='headline-1'>The world's largest selection of courses</h1>
      </div>
      <div className='para'>
        Choose from 155,000 online video courses with new additions published
        every month
      </div>
      <div className='course-options'>
        <ul>
          <li>
            <a href='#'>Python</a>
          </li>
          <li>
            <a href='#'>Excel</a>
          </li>
          <li>
            <a href='#'>Web development</a>
          </li>
          <li>
            <a href='#'>JavaScript</a>
          </li>
          <li>
            <a href='#'>Data Science</a>
          </li>
          <li>
            <a href='#'>AWS certification</a>
          </li>
          <li>
            <a href='#'>Drawing</a>
          </li>
        </ul>
        <div className='course-content'>
          <div className='course-content-div'>
            <div className='div-header'>
              <div className='header-content'>
                <div>
                  <h2>Expand your career opportunities with Python</h2>
                  <p>
                    Whether you work in machine learning or finance, or are
                    pursuing a career in web development or data science, Python
                    is one of the most important skills you can learn. Python's
                    simple syntax is especially suited for desktop, web, and
                    business...
                  </p>
                </div>
                <a href='#'>
                  <span>Explore Python</span>
                </a>
              </div>
              <img src={courseImage} alt='' />
            </div>
            <div className='course-cards-div'>
              <Slider {...settings}>
                <div className='course-card'>
                  <div className='picture-div'>
                    <img src={cardImage1} alt='' />
                  </div>
                  <div className='content-div'>
                    <div>
                      <h2>
                        <b>course title</b>
                      </h2>
                    </div>
                    <div>
                      <p>Author</p>
                    </div>
                    <div>
                      <p>rating</p>
                    </div>
                    <div>
                      <p>Price</p>
                    </div>
                  </div>
                </div>
                <div className='course-card'>
                  <div className='picture-div'>
                    <img src={cardImage2} alt='' />
                  </div>
                  <div className='content-div'>
                    <div>
                      <h2>
                        <b>course title</b>
                      </h2>
                    </div>
                    <div>
                      <p>Author</p>
                    </div>
                    <div>
                      <p>rating</p>
                    </div>
                    <div>
                      <p>Price</p>
                    </div>
                  </div>
                </div>
                <div className='course-card'>
                  <div className='picture-div'>
                    <img src={cardImage3} alt='' />
                  </div>
                  <div className='content-div'>
                    <div>
                      <h2>
                        <b>course title</b>
                      </h2>
                    </div>
                    <div>
                      <p>Author</p>
                    </div>
                    <div>
                      <p>rating</p>
                    </div>
                    <div>
                      <p>Price</p>
                    </div>
                  </div>
                </div>
                <div className='course-card'>
                  <div className='picture-div'>
                    <img src={cardImage4} alt='' />
                  </div>
                  <div className='content-div'>
                    <div>
                      <h2>
                        <b>course title</b>
                      </h2>
                    </div>
                    <div>
                      <p>Author</p>
                    </div>
                    <div>
                      <p>rating</p>
                    </div>
                    <div>
                      <p>Price</p>
                    </div>
                  </div>
                </div>
                <div className='course-card'>
                  <div className='picture-div'>
                    <img src={cardImage1} alt='' />
                  </div>
                  <div className='content-div'>
                    <div>
                      <h2>
                        <b>course title</b>
                      </h2>
                    </div>
                    <div>
                      <p>Author</p>
                    </div>
                    <div>
                      <p>rating</p>
                    </div>
                    <div>
                      <p>Price</p>
                    </div>
                  </div>
                </div>
                <div className='course-card'>
                  <div className='picture-div'>
                    <img src={cardImage1} alt='' />
                  </div>
                  <div className='content-div'>
                    <div>
                      <h2>
                        <b>course title</b>
                      </h2>
                    </div>
                    <div>
                      <p>Author</p>
                    </div>
                    <div>
                      <p>rating</p>
                    </div>
                    <div>
                      <p>Price</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
