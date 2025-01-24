import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ image, title, description, techStack, liveLink, repoLink }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
