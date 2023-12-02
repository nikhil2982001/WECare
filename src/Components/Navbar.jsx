import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul className="navbar-list"><h5 id='heading'>We CaRe</h5>
        <li><a href="#home">Home</a></li>
        <li><a href="#categories" id='cat'>Categories</a></li>

        <li><a href="#overview">Overview</a></li> 
        <li><a href="#dashboard">Dashboard</a></li>
       <li><a href="#discount">Discount</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <div className='extra'>
          <li><button id="expert">Become an Expert</button></li>
        <li><button><a href="#signIn">Sign In/Register</a></button></li>
        </div>
      </ul>
    </nav>
    <div className='space'></div>
    </>
  );
};

export default Navbar;

