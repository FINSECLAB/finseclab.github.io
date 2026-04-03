import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Projects.css';

const projects = [
  {
    logo: `${process.env.PUBLIC_URL}/project_logo/국가보안기술연구소.png`,
    logoAlt: '국가보안기술연구소',
    period: '[2026]',
    title: '국가·공공기관 정보인프라의 N2SF 적용을 위한 보안체계 구성 방안 연구',
  },
  {
    logo: `${process.env.PUBLIC_URL}/project_logo/aws.png`,
    logoAlt: 'AWS Korea',
    period: '[2025 - 2026]',
    title: "Research paper on leveraging cloud for enhanced R&D networks in Korea's financial sector",
  },
  {
    logo: `${process.env.PUBLIC_URL}/project_logo/iitp.png`,
    logoAlt: '정보통신기획평가원',
    period: '[2024 - 2026]',
    title: '디지털자산 시장의 악의적 금융행위 방지를 위한 디지털자산 거래 추적 기술 개발',
  },
];

const Projects_ko = () => {
  const bannerSrc = `${process.env.PUBLIC_URL}/background/projects.jpg`;

  return (
    <div className="projects-page">
      <Helmet>
        <title>Projects | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 진행 중인 연구 프로젝트." />
      </Helmet>

      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>Projects</h1>
      </div>

      <div className="page-content">
        <h2 className="page-section-title">프로젝트</h2>
        <hr className="page-section-divider" />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <div className="project-card-logo">
                <img src={project.logo} alt={project.logoAlt} />
              </div>
              <p className="project-card-period">{project.period}</p>
              <p className="project-card-title">{project.title}</p>
            </div>
          ))}
        </div>

        <div className="pagination" style={{ marginTop: '3rem' }}>
          <button className="active">1</button>
        </div>
      </div>
    </div>
  );
};

export default Projects_ko;
