import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const researchBars = [
  { text: '금융보안 정책 및 법규 연구', bg: '#EDD5D5', color: '#1a1a1a' },
  { text: '금융권 해킹방지 연구', bg: '#D8B8B8', color: '#1a1a1a' },
  { text: '전자금융 인증기법 연구', bg: '#BE9090', color: '#ffffff' },
  { text: '전자금융기반시설 취약점 분석 및 모의해킹 연구', bg: '#9A5050', color: '#ffffff' },
  { text: '디지털자산 보안기술 연구', bg: '#843030', color: '#ffffff' },
  { text: '금융권 제로트러스트 도입 방안 연구', bg: '#7B031D', color: '#ffffff' },
];

const About_ko = () => {
  const bannerSrc = `${process.env.PUBLIC_URL}/background/about.jpg`;

  return (
    <div className="about-page">
      <Helmet>
        <title>About | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 정보보호대학원 소속 금융보안연구실(Finsec Lab)을 소개합니다. 고려대 금융보안, 고려대학교 정보보호대학원 연구실." />
      </Helmet>

      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>About</h1>
      </div>

      {/* Content */}
      <div className="page-content">
        <h2 className="page-section-title">연구 분야</h2>
        <hr className="page-section-divider" />

        <p className="about-intro-text">
          지속되고 있는 금융권 해킹사고, 개인정보 유출 사고 등으로 인해 금융회사들은 정보보호를 강화하기 위한 노력을 기울이고 있습니다.
        </p>
        <p className="about-intro-text">
          금융보안연구실은 금융권에 특화된 정보보호 법규 및 정책 연구와 정보보호 기술 연구를 병행하고 있습니다.
        </p>
        <br></br>

        <h3 className="research-subjects-subheading">주요 연구 분야</h3>

        {researchBars.map((bar, i) => (
          <div
            key={i}
            className="research-bar"
            style={{ backgroundColor: bar.bg, color: bar.color }}
          >
            {bar.text}
          </div>
        ))}
        <br></br>

        <p className="about-intro-text" style={{ marginTop: '2rem' }}>
          특히, 전자금융거래법, 개인정보보호법, 신용정보보호법 등 관련 법규 준수를 위한 금융회사 보안점검 방법론, 금융권 망분리 규제, 전자금융시스템 보안성 검증, 전자금융 인증기법 등을 중점 연구를 하고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default About_ko;
