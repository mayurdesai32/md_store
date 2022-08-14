import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import Footer from './component/Footer/Footer';

// pages
import Homepage from './pages/Home_page/Home_page';

import Shop_page from './pages/Shop_page/Shop_page';

import Cart_page from './pages/Cart_Page/Cart_page';

import User_page from './pages/User_page/User_page';
function App() {
  return (
    <div id='app'>
      <Navbar />
      {/* <Homepage /> */}
      {/* <Shop_page /> */}
      {/* <Cart_page /> */}
      <User_page />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
