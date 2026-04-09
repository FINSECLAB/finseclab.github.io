import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import './News.css';
import { getAllNewsSorted } from '../data/newsData';

const ITEMS_PER_PAGE = 5;

const formatDisplayDate = (dateStr) => {
  const d = new Date(dateStr);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`;
};

const News = () => {
  const allNews = getAllNewsSorted();
  const totalCount = allNews.length;

  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'total';
  const page = parseInt(searchParams.get('page') || '1', 10);

  const bannerSrc = `${process.env.PUBLIC_URL}/background/news.jpg`;

  const years = [...new Set(allNews.map(n => new Date(n.sortDate).getFullYear()))].sort((a, b) => b - a);

  const filtered = activeTab === 'total'
    ? allNews
    : allNews.filter(n => new Date(n.sortDate).getFullYear() === parseInt(activeTab));

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const displayed = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleTabChange = (tab) => setSearchParams({ tab, page: '1' });
  const setPage = (p) => setSearchParams(prev => {
    const next = new URLSearchParams(prev);
    next.set('page', String(p));
    return next;
  });

  const getDisplayNo = (news) => {
    const sortedIdx = allNews.findIndex(n => n.id === news.id);
    return totalCount - sortedIdx;
  };

  return (
    <div className="news-page">
      <Helmet>
        <title>News | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 최신 소식 및 활동. 고려대 정보보호대학원 금융보안연구실 뉴스." />
        <link rel="canonical" href="https://finseclab.korea.ac.kr/news" />
      </Helmet>

      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>News</h1>
      </div>

      {/* Content */}
      <div className="page-content">
        <h2 className="page-section-title">Latest Activities</h2>
        <hr className="page-section-divider" />

        {/* Tab Filter */}
        <div className="tab-filter tab-filter--single">
          <button className={activeTab === 'total' ? 'active' : ''} onClick={() => handleTabChange('total')}>
            Total
          </button>
          {years.map(year => (
            <button
              key={year}
              className={activeTab === String(year) ? 'active' : ''}
              onClick={() => handleTabChange(String(year))}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Table */}
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
            {displayed.map((news) => (
              <tr key={news.id}>
                <td className="num-col">{getDisplayNo(news)}</td>
                <td className="title-col">{news.title}</td>
                <td className="date-col">{formatDisplayDate(news.sortDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {/* Pagination */}
        {totalPages > 0 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button key={p} className={p === page ? 'active' : ''} onClick={() => setPage(p)}>
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
