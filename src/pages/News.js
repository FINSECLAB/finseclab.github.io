import React from 'react';
import './News.css';
import { getAllNewsSorted } from '../data/newsData';

const News = () => {
  const allNews = getAllNewsSorted();

  return (
    <div className="page news-page">
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

