import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="page projects-page">
      <div className="projects-container">
        <div className="projects-card">
          <div className="projects-content">
            <h1 className="projects-title">Projects</h1>
            <div className="intro-text">
              <div className="projects-list">
                <div className="project-item">
                  <span className="project-period">[2024-2026]</span>
                  <p className="project-title">Development of Digital Asset Transaction Tracking Technology to Prevent Malicious Financial Conduct in the Digital Asset Market - IITP</p>
                </div>
                <div className="project-item">
                  <span className="project-period">[2025-2026]</span>
                  <p className="project-title">Research paper on leveraging cloud for enhanced R&D networks in Korea's financial sector - AWS Korea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;






