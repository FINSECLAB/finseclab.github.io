import React from 'react';
import './News.css';
import { getAllNewsSortedKo } from '../data/newsData_ko';

const News_ko = () => {
  return (
    <div className="page news-page">
      <div className="news-container">
        <div className="news-content">
          <h1 className="news-title">Latest Activities</h1>
          {getAllNewsSortedKo().map((news) => (
            <p key={news.id}>[{news.date}] {news.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News_ko;
