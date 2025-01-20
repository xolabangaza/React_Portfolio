import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img" aria-label="logo">👨‍💻</span>
      </div>
      <ul>
        <li>Projects</li>
        <li>About</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
      <div className="contact-btn">
        <button>Let's Work</button>
      </div>
    </nav>
  );
}

export default Navbar;
