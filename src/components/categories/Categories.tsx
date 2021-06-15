/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import image1 from "./images/category-image-1.jpg";
import image2 from "./images/category-image-2.jpg";
import image3 from "./images/category-image-3.jpg";
import image4 from "./images/category-image-4.jpg";
import image5 from "./images/category-image-5.jpg";
import image6 from "./images/category-image-6.jpg";
import image7 from "./images/category-image-7.jpg";
import image8 from "./images/category-image-8.jpg";

const Categories = () => {
  return (
    <div className='category-wrapper'>
      <section className='category'>
        <h2>Top Categories</h2>
        <div className='card-wrapper'>
          <a href='#'>
            <div className='design'>
              <div className='card-image'>
                <img src={image1} alt='' />
              </div>
              <div className='title'>Design</div>
            </div>
          </a>
          <a href='#'>
            <div className='development'>
              <div className='card-image'>
                <img src={image2} alt='' />
              </div>
              <div className='title'>Development</div>
            </div>
          </a>
          <a href='#'>
            <div className='marketing'>
              <div className='card-image'>
                <img src={image3} alt='' />
              </div>
              <div className='title'>Marketing</div>
            </div>
          </a>
          <a href='#'>
            <div className='IT and Software'>
              <div className='card-image'>
                <img src={image4} alt='' />
              </div>
              <div className='title'>IT and Software</div>
            </div>
          </a>
          <a href='#'>
            <div className='personal development'>
              <div className='card-image'>
                <img src={image5} alt='' />
              </div>
              <div className='title'>Personal Development</div>
            </div>
          </a>
          <a href='#'>
            <div className='business'>
              <div className='card-image'>
                <img src={image6} alt='' />
              </div>
              <div className='title'>Business</div>
            </div>
          </a>
          <a href='#'>
            <div className='photography'>
              <div className='card-image'>
                <img src={image7} alt='' />
              </div>
              <div className='title'>Photography</div>
            </div>
          </a>
          <a href='#'>
            <div className='music'>
              <div className='card-image'>
                <img src={image8} alt='' />
              </div>
              <div className='title'>Music</div>
            </div>
          </a>
        </div>
      </section>
      <section className='topics'>
        <div className='trending-list'>
          <h2 className='list-title'>Featured topics by category</h2>
          <div className='category-wise'>
            <div className='category-card'>
              <h4>Development</h4>
              <div>
                <div>
                  <a href=''>Python</a>
                  <p>289,888,000 students</p>
                </div>
                <div>
                  <a href=''>Web Development</a>
                  <p>289,888,000 students</p>
                </div>
                <div>
                  <a href=''>Machine Learning</a>
                  <p>289,888,000 students</p>
                </div>
              </div>
            </div>
            <div className='category-card'>
              <h4>Business</h4>
              <div>
                <div>
                  <div>
                    <a href=''>Financial Analysis</a>
                    <p>1,045,217 students</p>
                  </div>
                  <div>
                    <a href=''>SQL</a>
                    <p>289,888,000 students</p>
                  </div>
                  <div>
                    <a href=''>PMP</a>
                    <p>289,888,000 students</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='category-card'>
              <h4>IT and Software</h4>
              <div>
                <div>
                  <div>
                    <a href=''>AWS certification</a>
                    <p>289,888,000 students</p>
                  </div>
                  <div>
                    <a href=''>Ethical Hacking</a>
                    <p>289,888,000 students</p>
                  </div>
                  <div>
                    <a href=''>Cyber Security</a>
                    <p>289,888,000 students</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='category-card'>
              <h4>Design</h4>
              <div>
                <div>
                  <div>
                    <a href=''>Photoshop</a>
                    <p>289,888,000 students</p>
                  </div>
                  <div>
                    <a href=''>Graphic Design</a>
                    <p>289,888,000 students</p>
                  </div>
                  <div>
                    <a href=''>Drawing</a>
                    <p>289,888,000 students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='explore-btn-div'>
            <a href='' className='explore-button'>
              Explore more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
