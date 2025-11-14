// social.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './social.css'; // optional CSS for styling

const Social = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://www.facebook.com' },
    { icon: <FaTwitter />, url: 'https://www.twitter.com' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com' },
  ];

  return (
    <div className="social-container">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
