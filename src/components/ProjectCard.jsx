import React, { Component } from "react";
import "./ProjectCard.css";
import cq from './images/cq.png'

const ProjectCard = () => {
  return (
    <>
    <div className="project-card">
      <div className="project-image">
        <img
          src={cq} // Replace with actual project image URL
          alt="Project Screenshot"
        />
      </div>
      <div className="project-details">
        <h3>Project1</h3>
        <p>
          A modern e-commerce online store, where customers can browse clothes
          ranging for both men and women, make and track their orders, and an
          onsite payment integration for easy payments.
        </p>
        <div className="tech-stack">
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
        </div>
        <div className="project-links">
          <a href="" target="_blank" rel="noopener noreferrer">
            Live Preview →
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="github-icon"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="project-card">
    <div className="project-image">
      <img
        src={cq} // Replace with actual project image URL
        alt="Project Screenshot"
      />
    </div>
   
    <div className="project-details">
      <h3>Project2</h3>
      <p>
        A modern e-commerce online store, where customers can browse clothes
        ranging for both men and women, make and track their orders, and an
        onsite payment integration for easy payments.
      </p>
      <div className="tech-stack">
        <span>TypeScript</span>
        <span>Next.js</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>MongoDB</span>
      </div>
      <div className="project-links">
        <a href="" target="_blank" rel="noopener noreferrer">
          Live Preview →
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="github-icon"></i>
        </a>
      </div>
    </div>
  </div>
  </>
  );
};

export default ProjectCard;
