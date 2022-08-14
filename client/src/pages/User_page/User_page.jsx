import React from 'react';
import './User_page_style.css';
const User_page = () => {
  return (
    <div className='user_page'>
      <h1>Login Page</h1>
      <form action=''>
        <label for='fname'>User Name:</label>
        <br />
        <input type='text' id='fname' name='fname' />
        <br />
        <label for='lname'>Password:</label>
        <br />
        <input type='text' id='lname' name='lname' />
        <div>Forgot Password?</div>
        <div>
          <button> login</button>
        </div>
        <div>New User?</div>
      </form>
    </div>
  );
};

export default User_page;
