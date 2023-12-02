import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <>
    <div className='first-wrapper'>
        <div className='second-wrapper'>
          <div>
          <h3>Your Travel Journey Starts Here</h3>
            <h4>sign up and we'll send best deals</h4>

          </div>
          
        </div>
        <div className='third-wrapper'>
            <input type='email'placeholder='Your Email'></input>
            <button id='subscribe'>Subscribe</button>
        </div>
       
    </div>
    <div className='fourth-wrapper'>
    <div className='column'>
          <h4>Contact Us</h4>
          <ul>
            <li>Toll Free Customer-Care</li>
            <li>06549-33421</li>
          </ul>
        </div>
        <div className='column'>
          <h4>Company</h4>
          <ul>
          <li>About Us</li>
           <li>Careers</li>
          </ul>
        </div>
        <div className='column'>
          <h4>Support</h4>
          <ul>
          <li>Contact</li>
          <li>Legal Notice</li>
          </ul>
        </div>
        <div className='column'>
          <h4>Other Services</h4>
          <ul>
          <li>Car Hire</li>
           <li>Activity Finder</li>
          </ul>
        </div>
        <div className='column'>
          <h4>Mobile</h4>
          <ul>
          <li> Android</li>
            <li>ios</li>
          </ul>
        </div>
      </div>
    </>
  )
}
