import React from "react";

export function Navbar() {
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 w-2/5 flex justify-between items-center px-2 py-2 bg-black border border-gray-400 rounded-full z-10">
      <div className="text-2xl text-gray-300">
        <span role="img" aria-label="logo">👨‍💻</span>
      </div>
      <ul className="flex space-x-6 text-gray-400 text-lg">
        <li className="cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ec008c] to-[#fc6767]">
          Projects
        </li>
        <li className="cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ec008c] to-[#fc6767]">
          About
        </li>
        <li className="cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ec008c] to-[#fc6767]">
          Resume
        </li>
        <li className="cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ec008c] to-[#fc6767]">
          Contact
        </li>
      </ul>
      <button className=" text-gray-300 border border-gray-300 px-5 py-1 rounded-full text-lg transition-all duration-300 shadow-[0_0_10px_rgba(236,0,140,0.7)] hover:border-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ec008c] to-[#fc6767] hover:text-transparent">
        Let's Work
      </button>
    </nav>
  );
}
