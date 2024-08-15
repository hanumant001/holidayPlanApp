import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__legal">
        <p>
          <strong>BRAND®</strong> and the Mysite logo are registered trademarks of Mysite AB, used under license by Mysite Inc.
          © 2023 Mysite. All rights reserved.
        </p>
      </div>
      <div className="footer__links">
        <a href="#legal">Legal Notice</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#contact">Contact Us</a>
        <a href="#cookie">Cookie Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
