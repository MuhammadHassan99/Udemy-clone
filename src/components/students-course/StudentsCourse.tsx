import React from "react";
import cardImage1 from "./images/card-image.jpg";
import cardImage2 from "./images/card-2.jpg";
import cardImage3 from "./images/card-3.jpg";
import cardImage4 from "./images/card-4.jpg";
import Slider from "react-slick";

const StudentsCourse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className='student-coarse-container'>
      <h2>Students Are Viewing</h2>
      <div className='content'>
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
              {" "}
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
              {" "}
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
              {" "}
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
              {" "}
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
              {" "}
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
              {" "}
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
              {" "}
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
  );
};

export default StudentsCourse;
