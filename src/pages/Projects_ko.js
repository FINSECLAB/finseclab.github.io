import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Projects.css';

const Projects_ko = () => {
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
                  <span className="project-period">[2024-2026]</span>
                  <p className="project-title">디지털자산 시장의 악의적 금융행위 방지를 위한 디지털자산 거래 추적 기술 개발 - 정보통신기획평가원(IITP)</p>
                </div>
                <div className="project-item">
                  <span className="project-period">[2025-2026]</span>
                  <p className="project-title">국내 금융권 R&D 네트워크 고도화를 위한 클라우드 활용 연구 - AWS 코리아</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects_ko;
