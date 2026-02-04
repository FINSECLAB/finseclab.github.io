import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page about-page">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About</h1>
          <div className="intro-text">
            <p>지속되고 있는 금융권 해킹사고, 개인정보 유출 사고 등으로 인해 금융회사들은 정보보호를 강화하기 위한 노력을 기울이고 있습니다. 금융보안 연구실은 금융권에 특화된 정보보호 법규 및 정책 연구와 정보보호 기술 연구를 병행하고 있습니다.</p>
            <p>주요 연구 대상은 다음과 같습니다.</p>
            <ul style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-6)' }}>
              <li>금융보안 정책 및 법규 연구</li>
              <li>금융권 해킹방지 연구</li>
              <li>전자금융 인증기법 연구</li>
              <li>전자금융기반시설 취약점 분석 및 모의해킹 연구</li>
              <li>디지털자산 보안기술 연구</li>
              <li>금융권 제로트러스트 도입 방안 연구</li>
            </ul>
            <p style={{ marginTop: 'var(--space-4)' }}>특히, 전자금융거래법, 개인정보보호법, 신용정보보호법 등 관련 법규 준수를 위한 금융회사 보안점검 방법론, 금융권 망분리 규제, 전자금융시스템 보안성 검증, 전자금융 인증기법 등을 중점 연구를 하고 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

