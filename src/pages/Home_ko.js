import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLatestNewsKo } from '../data/newsData_ko';

const Home_ko = () => {
  const [fixedBlur, setFixedBlur] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setFixedBlur(null);
    document.documentElement.style.setProperty('--bg-blur', '5px');
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const heroHeight = window.innerHeight;
          const scrollDownThreshold = heroHeight * 0.8;

          if (currentScroll >= scrollDownThreshold && fixedBlur === null) {
            const blurAtThreshold = Math.min(scrollDownThreshold / 150, 5);
            setFixedBlur(blurAtThreshold);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixedBlur]);

  let blurAmount;
  if (fixedBlur !== null) {
    blurAmount = fixedBlur;
  } else {
    blurAmount = 5;
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-blur', `${blurAmount}px`);

    return () => {
      document.documentElement.style.setProperty('--bg-blur', '0px');
    };
  }, [blurAmount]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-slide-up">
          <h1 className="hero-title notranslate">금융보안 연구실</h1>
          <p className="hero-subtitle">Financial Security Lab</p>
        </div>
        <div className="scroll-hint">
          아래로 스크롤
        </div>
      </section>

      {/* Row 1: 연구소 소개 */}
      <section id="about" className="section intro-section">
        <div className="container">
          <div className="home-row one-col">
            <div className="home-card">
              <div className="intro-text">
                <p>금융 서비스의 안전성은 엄격한 컴플라이언스 준수와 선제적인 위험 관리에서 시작됩니다.</p>
                <p>우리 금융보안연구실은 해킹과 정보 유출 위협을 기술적 관점에서 깊이 있게 이해하고, 이를 효과적으로 통제·관리하기 위한 법·제도적 대응 방안과 보안성 검증 체계를 중점적으로 연구합니다.</p>
                <p>특히 전자금융거래법, 신용정보법 등 복잡한 규제 환경을 심층 분석하여 금융 인프라에 최적화된 보안 가이드라인과 정책 모델을 수립하고, 클라우드, AI 등 신기술 도입 시 발생할 수 있는 리스크를 정책적 관점에서 진단하며, 망분리 규제 개선과 같은 현업의 핵심 난제에 대해 실효성 있는 해법을 제시합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: 주요 연구 분야 */}
      <section className="section research-section">
        <div className="container">
          <div className="home-row one-col">
            <div className="home-card">
              <h2 className="section-title small">주요 연구 분야</h2>
              <div className="research-grid compact">
                <div className="research-card">
                  <h4>금융보안 정책 및 법규 연구</h4>
                </div>
                <div className="research-card">
                  <h4>금융권 해킹방지 연구</h4>
                </div>
                <div className="research-card">
                  <h4>전자금융 인증기법 연구</h4>
                </div>
                <div className="research-card">
                  <h4>전자금융기반시설 취약점 분석 및 모의해킹 연구</h4>
                </div>
                <div className="research-card">
                  <h4>디지털자산 보안기술 연구</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 3: 최근 소식 */}
      <section className="section news-section">
        <div className="container">
          <div className="home-row one-col">
            <div className="home-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <h2 className="section-title small" style={{ marginBottom: 0 }}>최근 소식</h2>
                <Link to="/news" className="text-link" style={{ fontSize: '0.9rem' }}>더보기</Link>
              </div>
              <div className="news-list" style={{ overflow: 'hidden' }}>
                {getLatestNewsKo(5).map((news) => (
                  <div key={news.id} className="news-item">
                    <p>[{news.date}] {news.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Box */}
      <section className="section footer-section">
        <div className="footer-box notranslate">
          <div className="footer-box-content">
            <div className="footer-box-section">
              <h4 className="footer-box-title">연구실 위치</h4>
              <p>서울특별시 성북구 안암로 145<br />고려대학교 안암캠퍼스 로봇융합관 204호</p>
            </div>
            <div className="footer-box-section">
              <h4 className="footer-box-title">연락처</h4>
              <p>02-3290-5944<br />finseclab0717@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home_ko;
