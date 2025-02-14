import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex justify-center mt-8">
      <a
  href="https://www.linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-3xl mx-6 text-[#ec008c] transition-all duration-300 hover:text-white"
>
  <FaLinkedin />
</a>
<a
  href="https://github.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-3xl mx-6 text-[#ec008c] transition-all duration-300 hover:text-white"
>
  <FaGithub />
</a>

    </div>
  );
};

export default SocialIcons;
