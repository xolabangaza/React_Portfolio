import React, { useState, useEffect, useCallback } from "react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home"); // Default section

  // Scroll event listener to detect the section currently in view
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id); // Set the section ID as active
      }
    });
  }, []);

  useEffect(() => {
    const sections = ["home", "projects", "about", "resume", "contact"];
    const options = {
      rootMargin: "0px",
      threshold: 0.4, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing each section
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    // Clean up observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  // Function to add "active" class to the clicked section link
  const getLinkClass = (section) => {
    return activeSection === section
      ? "cursor-pointer transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#ec008c] to-[#fc6767]"
      : "cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ec008c] to-[#fc6767]";
  };

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 w-4/5 sm:w-2/5 flex justify-between items-center px-2 py-2 bg-black border border-gray-600 rounded-full z-10">
      <div className="text-2xl text-gray-300">
        <span className="cursor-pointer" role="img" aria-label="logo">
          <a href="#home">👨‍💻</a>
        </span>
      </div>
      <ul className="flex space-x-6 text-gray-400 text-lg">
        <li>
          <a
            href="#home"
            className={getLinkClass("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={getLinkClass("projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={getLinkClass("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={getLinkClass("resume")}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={getLinkClass("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
      <a href="mailto:xolabangaza@gmail.com">
        <button className="text-gray-400 border border-gray-600 px-5 py-1 rounded-full text-lg transition-all duration-300 shadow-[0_0_08px_rgba(236,0,140,0.7)] hover:border-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ec008c] to-[#fc6767] hover:text-transparent">
          Let's Work
        </button>
      </a>
    </nav>
  );
}
