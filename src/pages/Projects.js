import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    logo: `${process.env.PUBLIC_URL}/project_logo/iitp.png`,
    logoAlt: 'IITP',
    period: '[2026 - 2029]',
    title: '글로벌 표준 준용 AI 기반 한국형 제로트러스트 오픈 플랫폼 개발',
    status: 'ongoing',
  },
  {
    logo: `${process.env.PUBLIC_URL}/project_logo/국가보안기술연구소.png`,
    logoAlt: 'National Security Research Institute',
    period: '[2026]',
    title: '국가·공공기관 정보인프라의 N2SF 적용을 위한 보안체계 구성 방안 연구',
    status: 'ongoing',
  },
  {
    logo: `${process.env.PUBLIC_URL}/project_logo/aws.png`,
    logoAlt: 'AWS Korea',
    period: '[2025 - 2026]',
    title: "Research paper on leveraging cloud for enhanced R&D networks in Korea's financial sector",
    status: 'completed',
  },
  {
    logo: `${process.env.PUBLIC_URL}/project_logo/iitp.png`,
    logoAlt: 'IITP',
    period: '[2024 - 2026]',
    title: 'Development of Digital Asset Transaction Tracking Technology to Prevent Malicious Financial Conduct in the Digital Asset Market',
    status: 'ongoing',
  },
];

const StatusBadge = ({ status }) => (
  <div className={`project-status-badge project-status-badge--${status}`}>
    {status === 'ongoing' ? 'Ongoing' : 'Completed'}
  </div>
);

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'total';

  const bannerSrc = `${process.env.PUBLIC_URL}/background/projects.jpg`;

  const filtered = activeTab === 'total'
    ? projects
    : projects.filter(p => p.status === activeTab);

  const handleTabChange = (tab) => setSearchParams({ tab });

  return (
    <div className="projects-page">
      <Helmet>
        <title>Projects | 고려대 금융보안 연구실</title>
        <meta name="description" content="고려대학교 금융보안 연구실(Finsec Lab) 진행 중인 연구 프로젝트. 고려대 정보보호대학원 금융보안 프로젝트." />
        <link rel="canonical" href="https://finseclab.korea.ac.kr/projects" />
      </Helmet>

      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>Projects</h1>
      </div>

      {/* Content */}
      <div className="page-content">
        <h2 className="page-section-title">Projects</h2>
        <hr className="page-section-divider" />

        <div className="tab-filter tab-filter--single">
          <button className={activeTab === 'total' ? 'active' : ''} onClick={() => handleTabChange('total')}>Total</button>
          <button className={activeTab === 'ongoing' ? 'active' : ''} onClick={() => handleTabChange('ongoing')}>Ongoing</button>
          <button className={activeTab === 'completed' ? 'active' : ''} onClick={() => handleTabChange('completed')}>Completed</button>
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div key={i} className="project-card">
              <StatusBadge status={project.status} />
              <div className="project-card-logo">
                <img src={project.logo} alt={project.logoAlt} />
              </div>
              <p className="project-card-period">{project.period}</p>
              <p className="project-card-title">{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
