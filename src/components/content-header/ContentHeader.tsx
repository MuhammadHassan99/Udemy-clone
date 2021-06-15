import React from "react";
import billBoardImage from "../../assets/images/billboard-image.jpg";

const ContentHeader = () => {
  return (
    <div className='header-card-content'>
      <div className='image-container'>
        <img src={billBoardImage} alt='' />
      </div>
      <div className='billboard-content-box'>
        <h1>Millions learn here</h1>
        <p>Get trusted courses from $13.99 — today only</p>
        <div className='billboard-content-form'>
          <form>
            <input type='text' placeholder='What do you want to learn?' />
            <button>
              <i className='fas fa-search'></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
