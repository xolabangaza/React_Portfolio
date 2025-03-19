import React from "react";
import { FaGithub, FaReact, FaNode, FaCss3Alt, FaHtml5, FaVuejs, FaBootstrap, FaJs } from "react-icons/fa";
import { DiFirebase, DiNodejs } from "react-icons/di";
import { motion } from "framer-motion";

const techIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JAVASCRIPT: <FaJs />,
  BOOTSTRAP: <FaBootstrap />,
  VUEJS: <FaVuejs />,
  REACT: <FaReact />,
  NODEJS: <FaNode />,
  EXPRESS: <DiNodejs />,
  MONGODB: <DiFirebase />,
  FIREBASE: <DiFirebase />,
  REDUX: <FaReact />,
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group bg-[#121212] rounded-xl shadow-lg overflow-hidden text-white border border-gray-700"
      initial={{ opacity: 0, x: 200 }}  // Initial position (hidden, off-screen)
      animate={{ opacity: 1, x: 0 }}    // Animation to visible position (slide in)
      transition={{ type: "spring", stiffness: 100, damping: 25 }}  // Smooth slide transition
    >
      {/* Project Image with Link */}
      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[450px] object-cover"
        />
      </a>

      {/* Overlay Content (Hidden by Default, Appears on Hover) */}
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-6">
        <h3 className="text-xl font-semibold text-[#ec008c]">{project.title}</h3>
        <p className="text-sm text-gray-400 mt-2">{project.description}</p>

        {/* Tech Stack Icons */}
        <div className="mt-3 flex flex-wrap justify-center gap-2 text-[#ec008c] text-2xl">
          {project.techStack.map((tech, index) => {
            const techUpper = tech.toUpperCase();
            return <span key={index}>{techIcons[techUpper] || <span>N/A</span>}</span>;
          })}
        </div>
      </div>

      {/* GitHub Repo Link */}
      <a
        href={project.repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 text-[#ec008c] text-3xl hover:text-[#f99fc4] transition"
      >
        <FaGithub />
      </a>
    </motion.div>
  );
};

export default ProjectCard;

