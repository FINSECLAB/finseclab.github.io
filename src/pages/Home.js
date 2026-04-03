import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getLatestNews, getAllNewsSorted } from '../data/newsData';

const researchCards = [
  { text: 'Financial Security Policies\nand Regulations', bg: '#EDD5D5', color: '#1a1a1a' },
  { text: 'Financial Cybersecurity', bg: '#D4ABAB', color: '#1a1a1a' },
  { text: 'Electronic Financial\nAuthentication', bg: '#D4ABAB', color: '#1a1a1a' },
  { text: 'Digital Asset Security Technology', bg: '#A06060', color: '#ffffff' },
  { text: 'Vulnerability Analysis and\nPenetration Testing\nof Electronic Financial Infrastructure', bg: '#7B2020', color: '#ffffff' },
];

const Home = () => {
  const latestNews = getLatestNews(5);
  const allNews = getAllNewsSorted();
  const totalCount = allNews.length;

  const formatDisplayDate = (dateStr) => {
    const d = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`;
  };

  return (
    <div className="home-page">
      <Helmet>
        <title>고려대학교 금융보안연구실 | Finsec Lab</title>
        <meta name="description" content="고려대학교 정보보호대학원 금융보안연구실(Finsec Lab)입니다. 고려대 금융보안, 고려대학교 금융보안, 금융보안연구실, 강형우 교수 연구실." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background/main.jpg)` }}>
        <div className="hero-content animate-slide-up">
          <p className="hero-subtitle">Korea University</p>
          <h1 className="hero-title notranslate">Financial Security Lab</h1>
        </div>
      </section>

      {/* Main Research Subjects */}
      <div className="home-section scroll-animate">
        <h2 className="home-section-title">Main research subjects</h2>
        <div className="research-grid-home">
          {researchCards.slice(0, 3).map((card, i) => (
            <div
              key={i}
              className="research-card-home"
              style={{ backgroundColor: card.bg, color: card.color }}
            >
              <h4>{card.text}</h4>
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
              <h4>{card.text}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className="home-section scroll-animate">
        <div className="home-news-header">
          <h2>News</h2>
          <Link to="/news" className="btn-more">More</Link>
        </div>
        <div className="table-scroll-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th className="num-col">No.</th>
                <th className="title-col">Title</th>
                <th className="date-col">Date</th>
              </tr>
            </thead>
            <tbody>
              {latestNews.map((news, index) => {
                const displayNo = totalCount - index;
                return (
                  <tr key={news.id}>
                    <td className="num-col">{displayNo}</td>
                    <td className="title-col">{news.title}</td>
                    <td className="date-col">{formatDisplayDate(news.sortDate)}</td>
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

export default Home;
