import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getLatestNewsKo, getAllNewsSortedKo } from '../data/newsData_ko';

const researchCards = [
  { text: '금융보안\n정책 및 법규 연구', bg: '#EDD5D5', color: '#1a1a1a' },
  { text: '금융권\n해킹방지 연구', bg: '#D4ABAB', color: '#1a1a1a' },
  { text: '전자금융\n인증기법 연구', bg: '#D4ABAB', color: '#1a1a1a' },
  { text: '디지털자산\n보안기술 연구', bg: '#A06060', color: '#ffffff' },
  { text: '전자금융기반시설\n취약점 분석 및 모의해킹 연구', bg: '#7B2020', color: '#ffffff' },
];

const Home_ko = () => {
  const latestNews = getLatestNewsKo(5);
  const allNews = getAllNewsSortedKo();
  const totalCount = allNews.length;

  return (
    <div className="home-page">
      <Helmet>
        <title>고려대학교 금융보안연구실 | Finsec Lab</title>
        <meta name="description" content="고려대학교 정보보호대학원 금융보안연구실(Finsec Lab)입니다. 고려대 금융보안, 고려대학교 금융보안, 금융보안연구실, 강형우 교수 연구실." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background/main.jpg)` }}>
        <div className="hero-content animate-slide-up">
          <p className="hero-subtitle">고려대학교</p>
          <h1 className="hero-title notranslate">금융보안 연구실</h1>
        </div>
      </section>

      {/* Main Research Subjects */}
      <div className="home-section scroll-animate">
        <h2 className="home-section-title">주요 연구 분야</h2>
        <div className="research-grid-home">
          {researchCards.slice(0, 3).map((card, i) => (
            <div
              key={i}
              className="research-card-home"
              style={{ backgroundColor: card.bg, color: card.color }}
            >
              <h4 style={{ whiteSpace: 'pre-line' }}>{card.text}</h4>
            </div>
          ))}
        </div>
        <div className="research-grid-home-row2">
          {researchCards.slice(3).map((card, i) => (
            <div
              key={i}
              className="research-card-home"
              style={{ backgroundColor: card.bg, color: card.color }}
            >
              <h4 style={{ whiteSpace: 'pre-line' }}>{card.text}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className="home-section scroll-animate">
        <div className="home-news-header">
          <h2>뉴스</h2>
          <Link to="/news" className="btn-more">더보기</Link>
        </div>
        <div className="table-scroll-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th className="num-col">No.</th>
                <th className="title-col">제목</th>
                <th className="date-col">날짜</th>
              </tr>
            </thead>
            <tbody>
              {latestNews.map((news, index) => {
                const displayNo = totalCount - index;
                return (
                  <tr key={news.id}>
                    <td className="num-col">{displayNo}</td>
                    <td className="title-col">{news.title}</td>
                    <td className="date-col">{news.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home_ko;
