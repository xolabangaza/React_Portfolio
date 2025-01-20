import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>
        <span>Selected Projects</span>
      </h2>
      <p>Recent works to see my creativity in action.</p>
      <div className="projects-container">
        <ProjectCard />
        {/* Add more <ProjectCard /> components if needed */}
      </div>
    </section>
  );
};

export default ProjectsSection;
