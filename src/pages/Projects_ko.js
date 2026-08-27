import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import Pagination from '../components/Pagination';
import useTab from '../utils/useTab';
import './Projects.css';

const ITEMS_PER_PAGE = 6;

const projects = [
  {
    logo: `${process.env.PUBLIC_URL}/project_logo/iitp.png`,
    logoAlt: '정보통신기획평가원',
    period: '[2026 - 2029]',
    title: '글로벌 표준 준용 AI 기반 한국형 제로트러스트 오픈 플랫폼 개발',
    status: 'ongoing',
  },
  {
    logo: `${process.env.PUBLIC_URL}/project_logo/국가보안기술연구소.png`,
    logoAlt: '국가보안기술연구소',
    period: '[2026]',
    title: '국가 · 공공기관 정보인프라의 N2SF 적용을 위한 보안체계 구성 방안 연구',
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
    logoAlt: '정보통신기획평가원',
    period: '[2024 - 2026]',
    title: '디지털자산 시장의 악의적 금융행위 방지를 위한 디지털자산 거래 추적 기술 개발',
    status: 'ongoing',
  },
];

const StatusBadge = ({ status }) => (
  <div className={`project-status-badge project-status-badge--${status}`}>
    {status === 'ongoing' ? '진행 중' : '완료'}
  </div>
);

const Projects_ko = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, handleTabChange] = useTab('total');
  const page = parseInt(new URLSearchParams(location.search).get('page') || '1', 10);

  const bannerSrc = `${process.env.PUBLIC_URL}/background/projects.jpg`;

  const filtered = activeTab === 'total'
    ? projects
    : projects.filter(p => p.status === activeTab);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const displayed = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // 페이지 이동 시 해시(현재 탭)를 보존
  const setPage = (p) => {
    const params = new URLSearchParams(location.search);
    params.set('page', String(p));
    navigate({ pathname: location.pathname, search: `?${params}`, hash: location.hash });
  };

  return (
    <div className="projects-page">
      <Seo routeKey="projects" />

      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>프로젝트</h1>
      </div>

      <div className="page-content">
        <h2 className="page-section-title">프로젝트</h2>
        <hr className="page-section-divider" />

        <div className="tab-filter tab-filter--single">
          <button className={activeTab === 'total' ? 'active' : ''} onClick={() => handleTabChange('total')}>전체</button>
          <button className={activeTab === 'ongoing' ? 'active' : ''} onClick={() => handleTabChange('ongoing')}>진행 중</button>
          <button className={activeTab === 'completed' ? 'active' : ''} onClick={() => handleTabChange('completed')}>완료</button>
        </div>

        <div className="projects-grid">
          {displayed.map((project, i) => (
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

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </div>
  );
};

export default Projects_ko;
