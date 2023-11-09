import React from 'react';
import './footer.css';
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="https://media.licdn.com/dms/image/D4D0BAQG0L--9BaIOKg/company-logo_200_200/0/1683529087287/gyizer_logo?e=2147483647&v=beta&t=P6zh4GbqlpP0YCNqALK4ocJOAItHMiglokTl2iC5CUU" alt="Company Logo" />
        <p className='footer-text'>@Gyizer System Pvt Ltd</p>
      </div>
      <div className="footer-right">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram /><br></br>
          <span>Instagram</span>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter /><br></br>
          <span>Twitter</span>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /><br></br>
          <span>LinkedIn</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
