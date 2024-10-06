import React from 'react';
import '../assets/styles/navbar.css';
import Logo from '../assets/images/logoWhite.png';

const Navbar = () => {
    return (
      <div className="vertical-navbar">
        <img src={Logo} alt='white-logo' className='white-logo' />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/internship">Internship</a></li>
          <li><a href="/interview">Interview</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
    );
  };

export default Navbar;