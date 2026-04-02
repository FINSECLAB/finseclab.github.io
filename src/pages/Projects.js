import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Projects.css';

const Projects = () => {
  return (
    <div className="page projects-page">
      <Helmet>
        <title>Projects | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 진행 중인 연구 프로젝트. 고려대 정보보호대학원 금융보안 프로젝트." />
      </Helmet>
      <div className="projects-container">
        <div className="projects-card">
          <div className="projects-content">
            <h1 className="projects-title">Projects</h1>
            <div className="intro-text">
              <div className="projects-list">
                <div className="project-item">
                  <span className="project-period">[2026] National Security Research Institute(NSR)</span>
                  <p className="project-title">Research on Security System Configuration for N2SF Application in National and Public Institution Information Infrastructure</p>
                </div>
                <div className="project-item">
                  <span className="project-period">[2025-2026] AWS Korea</span>
                  <p className="project-title">Research on leveraging cloud for enhanced R&D networks in Korea's financial sector</p>
                </div>
                <div className="project-item">
                  <span className="project-period">[2024-2026] Institute of Information & communications Technology Planning & Evaluation(IITP)</span>
                  <p className="project-title">Development of Digital Asset Transaction Tracking Technology to Prevent Malicious Financial Conduct in the Digital Asset Market</p>
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






