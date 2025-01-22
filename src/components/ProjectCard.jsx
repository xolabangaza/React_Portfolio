import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";

const ProjectCard = ({ image, title, description, techStack, liveLink, repoLink }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={`${title} Screenshot`} />
      </div>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.split(", ").map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Preview →
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <i className="github-icon">GitHub</i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  repoLink: PropTypes.string,
};

export default ProjectCard;
