import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLatestNews } from '../data/newsData';

const Home = () => {
  const [fixedBlur, setFixedBlur] = useState(null);

  // 컴포넌트 마운트 시 초기화
  useEffect(() => {
    // 스크롤 위치를 맨 위로 리셋
    window.scrollTo(0, 0);
    
    // 블러 상태 리셋
    setFixedBlur(null);
    
    // 배경 블러를 처음부터 적용 (스크롤 내렸을 때 수준)
    document.documentElement.style.setProperty('--bg-blur', '5px');
    
    // setupPageAnimations() 호출 제거 - App.js에서 처리
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const heroHeight = window.innerHeight; // hero 섹션 높이 (100vh)
          const scrollDownThreshold = heroHeight * 0.8; // SCROLL DOWN이 사라지는 시점
          
          // SCROLL DOWN이 사라지는 시점에 도달했으면 블러 고정
          if (currentScroll >= scrollDownThreshold && fixedBlur === null) {
            const blurAtThreshold = Math.min(scrollDownThreshold / 150, 5); // 최대 5px
            setFixedBlur(blurAtThreshold);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기 계산
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixedBlur]);

  // 블러 강도 계산
  let blurAmount;
  if (fixedBlur !== null) {
    // SCROLL DOWN이 사라진 후에는 고정된 블러 값 사용
    blurAmount = fixedBlur;
  } else {
    // 처음부터 5px 블러 유지 (스크롤과 관계없이)
    blurAmount = 5; // 항상 5px 블러 적용
  }

  useEffect(() => {
    // 배경 이미지만 블러 처리하기 위해 CSS 변수 설정
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
          <h1 className="hero-title notranslate">Financial Security Lab</h1>
          <p className="hero-subtitle">금융보안 연구실</p>
        </div>
        <div className="scroll-hint">
          scroll down
        </div>
      </section>

      {/* Row 1: 연구소 소개 (한 줄, 박스 안에 글) */}
      <section id="about" className="section intro-section">
        <div className="container">
          <div className="home-row one-col">
            <div className="home-card">
              <div className="intro-text">
                <p>The safety of financial services begins with strict compliance adherence and proactive risk management.</p>
                <p>Our Finsec Lab deeply understands hacking and information leakage threats from a technical perspective, focusing on researching legal and institutional countermeasures and security verification systems to effectively control and manage them.</p>
                <p>Specifically, we conduct in-depth analysis of complex regulatory environments, such as the ELECTRONIC FINANCIAL TRANSACTIONS ACT and the CREDIT INFORMATION USE AND PROTECTION ACT, to establish security guidelines and policy models optimized for financial infrastructure.</p>
                <p>We diagnose risks that may arise from adopting new technologies like cloud and AI from a policy perspective and propose effective solutions for critical industry challenges, such as improving network segregation regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: 주요 연구 분야 (한 줄, 더보기 없음) */}
      <section className="section research-section">
        <div className="container">
          <div className="home-row one-col">
            <div className="home-card">
              <h2 className="section-title small">Main Research Subjects</h2>
              <div className="research-grid compact">
                <div className="research-card">
                  <h4>Financial Security Policies and Regulations</h4>
                </div>
                <div className="research-card">
                  <h4>Financial Cybersecurity</h4>
                </div>
                <div className="research-card">
                  <h4>Electronic Financial Authentication</h4>
                </div>
                <div className="research-card">
                  <h4>Vulnerability Analysis and Penetration Testing of Electronic Financial Infrastructure</h4>
                </div>
                <div className="research-card">
                  <h4>Digital Asset Security Technology</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 3: 최근 소식 (통합, 최근 5개) */}
      <section className="section news-section">
        <div className="container">
          <div className="home-row one-col">
            <div className="home-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <h2 className="section-title small" style={{ marginBottom: 0 }}>Latest Activities</h2>
                <Link to="/news" className="text-link" style={{ fontSize: '0.9rem' }}>more</Link>
              </div>
              <div className="news-list" style={{ overflow: 'hidden' }}>
                {getLatestNews(5).map((news) => (
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
              <h4 className="footer-box-title">
                Address
              </h4>
              <p>Room 204, Robot Convergence Building,<br />145 Anam-ro, Seongbuk-gu, Seoul, 02841</p>
            </div>
            <div className="footer-box-section">
              <h4 className="footer-box-title">
                Contact
              </h4>
              <p>+82-2-3290-5944<br />finseclab0717@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
