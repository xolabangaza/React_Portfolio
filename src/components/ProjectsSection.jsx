import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); // Directly set the fetched data as 'projects'
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-[#ec008c] to-[#fc6767] text-center text-4xl font-bold mb-10">
        My Latest Projects
      </h2>

      {/* Container for the sliding cards */}
      <div className="overflow-hidden mx-auto w-full max-w-7xl bg-black p-8 shadow-xl min-h-[800px]">
      <motion.div
          className="flex space-x-6"
          animate={{
            x: "-50%", // Scroll 2 cards at a time (50% of the container)
          }}
          transition={{
            x: {
              repeat: Infinity, // Repeat animation infinitely
              repeatType: "loop", // Loop continuously
              duration: 20, // Adjust the duration for scroll speed
              ease: "linear", // Smooth, linear transition
            },
          }}
        >
          {/* Loop through projects and add styling */}
          {projects.map((project) => (
            <div key={project.id} className="flex-shrink-0 w-[calc(50%-1.5rem)] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
