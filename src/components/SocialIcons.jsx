import React, { Component } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './SocialIcons.css';


class SocialIcons extends Component {
    render(){
     return(
    <div className="social-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}
}

export default SocialIcons;
