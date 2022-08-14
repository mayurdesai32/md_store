import React from 'react';
import jam from '../../utils/jam.jpg';

import './Product_component_style.css';
const Product_component = () => {
  return (
    <div className='product'>
      <div className='product_img'>
        <img src={jam} alt='img' />
      </div>
      <h3 className='product_title'>some product</h3>
      <div className='product_star'>star</div>
      <div className='price'>Rs3000</div>
      <button className='product_btn'>View Details</button>
    </div>
  );
};

export default Product_component;
