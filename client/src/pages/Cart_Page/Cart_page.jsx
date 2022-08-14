import React from 'react';
import './Cart_page_style.css';
import Cart_single_item from '../../component/Cart_single_item/Cart_single_item';

const Cart_page = () => {
  return (
    <div className='Cart_page'>
      <h2 className='title'>YOUR CART : 2 items</h2>
      <div className='cart_content'>
        <div>
          <Cart_single_item />
          <Cart_single_item />
          <Cart_single_item />
        </div>
        <div className='cart_bill'>
          <div className='title'>Order Summary</div>
          <hr />
          <div className='data_bill'>
            <div className='key'>Subtotal</div>
            <div className='value'>2(units)</div>
          </div>
          <div className='data_bill'>
            <div className='key'>Est. total:</div>
            <div className='value'>Rs 8000</div>
          </div>
          <button className='checkout'>checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart_page;
