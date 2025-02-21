import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex justify-center mt-8 space-x-6">
      {/* LinkedIn Icon with Tooltip */}
      <div className="relative group">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#ec008c] transition-all duration-300 hover:text-[#f99fc4]"
        >
          <FaLinkedin />
        </a>
        <span className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md">
          LinkedIn
        </span>
      </div>

      {/* GitHub Icon with Tooltip */}
      <div className="relative group">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#ec008c] transition-all duration-300 hover:text-[#f99fc4]"
        >
          <FaGithub />
        </a>
        <span className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md">
          GitHub
        </span>
      </div>
    </div>
  );
};

export default SocialIcons;
