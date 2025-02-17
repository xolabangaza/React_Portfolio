import React from "react";
import { FaGithub, FaReact, FaNode, FaCss3Alt, FaHtml5, FaVuejs, FaBootstrap, FaJs } from "react-icons/fa";

// The techIcons object mapping tech names to corresponding React Icons
const techIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JAVASCRIPT: <FaJs />,
  BOOTSTRAP: <FaBootstrap />,
  VUEJS: <FaVuejs />,
  REACT: <FaReact />,
  NODEJS: <FaNode />
};

const ProjectCard = ({ project }) => {
  return (
    <div className="relative flex flex-col md:flex-row via-gray-900 to-black rounded-xl overflow-hidden shadow-lg p-6 text-white border border-gray-700 w-full min-w-[900px] max-w-6xl mx-auto min-h-[400px] mb-6">
      <a
        href={project.repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-[#ec008c] text-4xl hover:text-[#f99fc4] transition duration-300"
      >
        <FaGithub />
      </a>
      <div className="w-full md:w-1/3 ml-12 pl-4 flex justify-center items-center">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl w-full min-h-[460px] min-w-[550px] object-cover shadow-md mb-0 mt-6" 
        />
      </div>
      <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-12 pl-12 flex flex-col gap-8">
        <h3 className="text-left pl-8 text-2xl mt-10 font-semibold text-[#f99fc4] tracking-wide">
          {project.title}
        </h3>
        <p className="mt-2 pl-8 text-gray-400 text-m leading-relaxed min-w-[100px] text-left">
          {project.description}
        </p>
        <div className="mt-4 pl-5 flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-1 text-[#ec008c] text-2xl px-3 py-1 rounded-full font-medium shadow-md"
              >
                {techIcons[tech.toUpperCase()]} {/* Render the tech icon */}
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ec008c] text-lg hover:text-[#f99fc4] transition duration-300 pl-8"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
