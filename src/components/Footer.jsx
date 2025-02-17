import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-950 mx-8 py-10 border-t-4 border-[#ec008c] text-gray-400 text-center rounded-t-3xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left: Copyright Text */}
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Xola Bangaza. All rights reserved.</p>

        {/* Right: Social Links */}
        <div className="flex space-x-8 mt-6 md:mt-0">
          {/* Email */}
          <a href="mailto:xolabangaza@gmail.com" className="hover:text-[#ec008c] transition">
            <FaEnvelope className="text-3xl" />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/xola-bangaza-340519226/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin className="text-3xl" />
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/xolabangaza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
