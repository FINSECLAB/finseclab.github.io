import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import Pagination from '../components/Pagination';
import useTab from '../utils/useTab';
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

  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, handleTabChange] = useTab('total');
  const page = parseInt(new URLSearchParams(location.search).get('page') || '1', 10);

  const bannerSrc = `${process.env.PUBLIC_URL}/background/news.jpg`;

  const years = [...new Set(allNews.map(n => new Date(n.sortDate).getFullYear()))].sort((a, b) => b - a);

  const filtered = activeTab === 'total'
    ? allNews
    : allNews.filter(n => new Date(n.sortDate).getFullYear() === parseInt(activeTab));

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const displayed = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // 페이지 이동 시 해시(현재 탭)를 보존
  const setPage = (p) => {
    const params = new URLSearchParams(location.search);
    params.set('page', String(p));
    navigate({ pathname: location.pathname, search: `?${params}`, hash: location.hash });
  };

  const getDisplayNo = (news) => {
    const sortedIdx = allNews.findIndex(n => n.id === news.id);
    return totalCount - sortedIdx;
  };

  return (
    <div className="news-page">
      <Seo routeKey="news" />

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
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </div>
  );
};

export default News;
