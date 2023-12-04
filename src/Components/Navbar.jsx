import React from 'react';
import './Navbar.css'; 
const Navbar = () => {
  const page = () => {
    alert("This Page is under Construction");
  };
  const pager = () => {
    alert("Great! You are ready for shopping");
  };
  return (
    <>
    <nav className="navbar">
      <ul className="navbar-list"><h5 id='heading'>We CaRe</h5>
        <div id="page_"></div>
         <div id="page_"></div>
        <div id="page_"></div>
        <div id="page_"></div>
        <div id="page_"></div>
        
        <li><a href="#home" className='popup'onClick={page}>Home</a></li>
        <li><a href="#categories" id='cat'className='popup'onClick={page}>Categories</a></li>

        <li><a href="#overview"className='popup'onClick={page}>Overview</a></li> 
        <li><a href="#dashboard"className='popup'onClick={page}>Dashboard</a></li>
       <li><a href="#discount"className='popup'onClick={page}>Discount</a></li>
        <li><a href="#contact"className='popup'onClick={page}>Contact</a></li>
        <li><a href="#about"className='popup'onClick={page}>About</a></li>
        <div id="page_"></div>
        <div id="page_"></div>
         <div id="page_"></div>
        <div id="page_"></div>
        <div id="page_"></div>
        <div className='extra'>
          <li><button id="expert"className='popup'onClick={page}>Become an Expert</button></li>
        <li><button><a href="#signIn"onClick={pager}>Sign In/Register</a></button></li>
        </div>
      </ul>
    </nav>
    <div className='space'></div>
    </>
  );
};





export default Navbar;



