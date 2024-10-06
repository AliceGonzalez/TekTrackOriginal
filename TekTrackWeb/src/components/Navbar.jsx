//IMPORTS
import React from 'react';
import Logo from '../assets/images/BlackLogo.png';

//COMPONENT NavItem: to avoid HTML elements
//PROPS
//  href: receives link's destination (/jobs)
//  children: received text or elements that will be displayed inside the anchor tag
//  returns: returns a list item (<li>) containing an anchor (<a>), linking to the specified href with the provided children as its content.
const NavItem = ({ href, children }) => (
  <li style={{ display: 'block', margin: '10px 0' }}>
    <a href={href} style={{ color: 'black', textDecoration: 'none' }}>{children}</a>
  </li>
);

//COMPONENT Navbar: functional component that renders entire navigation bar
const Navbar = () => {
  const navbarStyle = {
    position: 'fixed', // Keeps the navbar fixed to the left
    top: 0,
    left: 0,
    height: '100%', // Full height
    width: '150px', // Set the width of the navbar
    backgroundColor: '#f8f8f8',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.5)', // Optional: adds a shadow
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centers children horizontally
  };

  const logoStyle = {
    height: '200px',
    width: '200px',
    marginTop: '0px',
    marginBottom: '0px', // Space below the logo
    display: 'block',
  };

  return (
    <nav style={navbarStyle}>
      <img src={Logo} alt='white-logo' style={logoStyle} />
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <NavItem href="/">Home</NavItem> 
        <NavItem href="/jobs">Jobs</NavItem>
        <NavItem href="/internship">Internship</NavItem>
        <NavItem href="/interview">Interview</NavItem>
        <NavItem href="/faq">FAQ</NavItem>
        <NavItem href="/blog">Blog</NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
