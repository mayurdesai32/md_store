import React from 'react';
import './Shoppage_style.css';

import Product_component from '../../component/product/Product_component';

const Shop_page = () => {
  return (
    <div className='shop_page'>
      <h1 className='main_title'>Lastest Product</h1>
      <div className='all_product'>
        <Product_component />
        <Product_component />
        <Product_component />
        <Product_component />
        <Product_component />
      </div>
      <div className='pagination'>
        <div>First</div>
        <div>Prev</div>
        <div>1</div>
        <div>Next</div>
        <div>Last</div>
      </div>
    </div>
  );
};

export default Shop_page;
