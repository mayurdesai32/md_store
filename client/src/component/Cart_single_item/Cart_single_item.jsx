import React from 'react';
import jam from '../../utils/jam.jpg';
import './Cart_single_item_style.css';
const Cart_single_item = () => {
  return (
    <div className='cart_item'>
      <div className='item_img'>
        <img src={jam} alt='jam' />
      </div>
      <div className='item_title'>jam </div>
      <div className='item_price'>Rs3000</div>
      <div>
        <button type=''>-</button>
        <input type='button' value='1' />
        <button type=''>+</button>
      </div>

      <button type=''>remove</button>
    </div>
  );
};

export default Cart_single_item;
