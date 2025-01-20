import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './SocialIcons.css';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}

export default SocialIcons;
