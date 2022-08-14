import React from 'react';
import './Homepage_style.css';
const Home_page = () => {
  return (
    <div className='main_content home_page'>
      {/* start product */}
      {/* start */}
      <div className='box'>
        <div className='sub_box'>
          <p className='title'>HATS</p>
          <div className='shop_now'>
            <a href=''>SHOP NOW</a>
          </div>
        </div>
      </div>
      {/* end */}
      {/* start */}
      <div className='box'>
        <p className='title'>HATS</p>
        <div className='shop_now'>
          <a href=''>SHOP NOW</a>
        </div>
      </div>
      {/* end */}

      {/* start */}
      <div className='box'>
        <p className='title'>HATS</p>
        <div className='shop_now'>
          <a href=''>SHOP NOW</a>
        </div>
      </div>
      {/* end */}
      {/* end product */}
      {/*  start catgender */}
      {/* start */}
      <div className='gen_box'>
        <p className='gen_title'>MEN</p>
        <div className='gen_shop_now'>
          <a href=''>SHOP NOW</a>
        </div>
      </div>
      {/* end */}
      {/* start */}
      <div className='gen_box'>
        <p className='gen_title'>WOMEN</p>
        <div className='gen_shop_now'>
          <a href=''>SHOP NOW</a>
        </div>
      </div>
      {/* end */}
      {/*  end catgender */}
    </div>
  );
};

export default Home_page;
