import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import './News.css';
import { getAllNewsSortedKo } from '../data/newsData_ko';

const ITEMS_PER_PAGE = 5;

const News_ko = () => {
  const allNews = getAllNewsSortedKo();
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
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 최신 소식 및 활동." />
      </Helmet>

      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>News</h1>
      </div>

      <div className="page-content">
        <h2 className="page-section-title">최근 활동</h2>
        <hr className="page-section-divider" />

        <div className="tab-filter tab-filter--single">
          <button className={activeTab === 'total' ? 'active' : ''} onClick={() => handleTabChange('total')}>전체</button>
          {years.map(year => (
            <button key={year} className={activeTab === String(year) ? 'active' : ''} onClick={() => handleTabChange(String(year))}>
              {year}
            </button>
          ))}
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
            {displayed.map((news) => (
              <tr key={news.id}>
                <td className="num-col">{getDisplayNo(news)}</td>
                <td className="title-col">{news.title}</td>
                <td className="date-col">{news.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {totalPages > 0 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button key={p} className={p === page ? 'active' : ''} onClick={() => setPage(p)}>{p}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News_ko;
