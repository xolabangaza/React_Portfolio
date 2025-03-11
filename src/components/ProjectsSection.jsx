import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) => {
        // Directly set the fetched data as 'projects' instead of mapping to a Project class
        setProjects(data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section id="projects" className="py-20 projects-section">
      <h2 className="text-[#ec008c] text-center text-3xl py-4 font-bold">
        Featured Projects
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="motion-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              zIndex: projects.length - index,
              transform: `translateY(${scrollYProgress.get() * 100}px)`,
            }}
          >
            <ProjectCard project={project} number={index + 1} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
