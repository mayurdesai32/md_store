import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
const Navbar = () => {
  return (
    <>
      <nav>
        <div id='brand'>
          <Link to='/'>brand</Link>
        </div>
        <ul>
          <li className='nav-link'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-link'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-link'>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
