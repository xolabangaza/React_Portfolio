import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Project from "../models/Project";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from JSON server
    fetch("http://localhost:5000/projects")
      .then((response) => response.json())
      .then((data) => {
        const projectInstances = data.map(
          (proj) =>
            new Project(
              proj.id,
              proj.image,
              proj.title,
              proj.description,
              proj.techStack,
              proj.liveLink,
              proj.repoLink
            )
        );
        setProjects(projectInstances);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section className="projects-section">
      <h2>
        <span>Selected Projects</span>
      </h2>
      <p>Scroll down to explore the projects. </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="motion-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-20%" }}
            style={{ zIndex: projects.length - index }} // Ensure higher cards are on top
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.getShortDescription()}
              techStack={project.getTechStack().split(", ")}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
