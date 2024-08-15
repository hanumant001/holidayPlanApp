import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Brand Logo</div>
      <nav className="header__nav">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#resources">Useful Resources</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
