import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from "react-icons/fa"; // Import arrow icon

export function ContactSection() {
  return (
    <section id="contact" className="py-20 text-white">
      <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ec008c] to-[#fc6767] mt-4">
        Let's Connect
      </h1>
      <p className="text-gray-400 text-center mt-2">Thank you for visiting! Let’s stay in touch.</p>

      {/* Centered container for both sections */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
        
        {/* Left Side: Goodbye Bitmoji Card */}
        <div className="p-8 rounded-lg shadow-xl text-center flex flex-col items-center">
          {/* Bitmoji or Image */}
          <img
            src="src/components/images/bars.png" // Replace with your Bitmoji URL
            alt="Goodbye Bitmoji"
            className="w-72 h-72 mb-4"
          />
          {/* <h3 className="text-2xl font-semibold text-pink-500">Goodbye!</h3> */}
        </div>

        <div className="bg-gray-950 p-10 w-96 rounded-xl shadow-xl border-b border-gray-300 flex flex-col items-center">
          <div className="space-y-6 w-full">
            
            {/* Email */}
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-[#ec008c] text-3xl" />
              <a
                href="mailto:xolabangaza@gmail.com"
                className="text-gray-300 hover:text-[#ec008c] transition-all duration-300 flex items-center space-x-1"
              >
                <span>xolabangaza@gmail.com</span>
                <FaArrowRight className="text-[#ec008c] text-lg ml-1 rotate-[-45deg]" />
              </a>
            </div>
            
            {/* LinkedIn */}
            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-blue-500 text-3xl" />
              <a
                href="https://www.linkedin.com/in/xola-bangaza-340519226/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-all duration-300 flex items-center space-x-1"
              >
                <span>linkedin.com</span>
                <FaArrowRight className="text-blue-500 text-lg ml-1 rotate-[-45deg]" />
              </a>
            </div>
            
            {/* GitHub */}
            <div className="flex items-center space-x-3">
              <FaGithub className="text-gray-400 text-3xl" />
              <a
                href="https://github.com/xolabangaza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition-all duration-300 flex items-center space-x-1"
              >
                <span>github.com</span>
                <FaArrowRight className="text-gray text-lg ml-1 rotate-[-45deg]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
