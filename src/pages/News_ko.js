import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import Pagination from '../components/Pagination';
import useTab from '../utils/useTab';
import './News.css';
import { getAllNewsSortedKo } from '../data/newsData_ko';

const ITEMS_PER_PAGE = 5;

const News_ko = () => {
  const allNews = getAllNewsSortedKo();
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

      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>소식</h1>
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

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </div>
  );
};

export default News_ko;
