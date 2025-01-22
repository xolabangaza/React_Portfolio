import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Project from "../models/Project";  // Correct path
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
      <p>Discover my recent work and see creativity brought to life.</p>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.getShortDescription()}
            techStack={project.getTechStack()}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
