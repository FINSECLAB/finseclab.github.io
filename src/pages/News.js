import React from 'react';
import { Helmet } from 'react-helmet-async';
import './News.css';
import { getAllNewsSorted } from '../data/newsData';

const News = () => {
  const allNews = getAllNewsSorted();

  return (
    <div className="page news-page">
      <Helmet>
        <title>News | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 최신 소식 및 활동. 고려대 정보보호대학원 금융보안연구실 뉴스." />
      </Helmet>
      <div className="news-container">
        <div className="news-content">
          <h1 className="news-title">Latest Activities</h1>
          {allNews.map((news) => (
            <p key={news.id}>[{news.date}] {news.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

