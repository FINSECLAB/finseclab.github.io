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
                  <p><strong>[2024-2026]</strong> 디지털 자산 시장에서의 악의적 금융 행위 방지를 위한 디지털 자산 거래 추적기술 개발 - IITP</p>
                </div>
                <div className="project-item">
                  <p><strong>[2025-2026]</strong> Research paper on leveraging cloud for enhanced R&D networks in Korea's financial sector - AWS 코리아</p>
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






