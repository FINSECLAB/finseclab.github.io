import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import './Papers.css';

const ITEMS_PER_PAGE = 4;

const papers = [
  { year: '2025', title: 'Analysis of Financial Security Risks in Decentralized Finance (DeFi) Using Real Transaction Data', authors: 'Junho Bae, Cheonho Park, Cholsoo Go, Hyungwoo Kang - CISC 35 (2), 968-971', type: 'conference' },
  { year: '2024', title: 'Concurrent two-party key exchange with forward unlinkability in internet of drones', authors: 'JY Jeong, HW Kang, IR Jeong - IEEE Access 12, 77250-77256', type: 'international' },
  { year: '2021', title: 'The Meaning and Issues of the Reform of the Electronic Financial Transaction Act', authors: 'H Kang - KISO Journal 44 (KISO), pp. 19-22', type: 'domestic' },
  { year: '2008', title: 'Security Assessment Framework Using Static Analysis and Fault Injection', authors: 'H Kang - International Conference on Intelligent Computing, 679-687', type: 'conference' },
  { year: '2007', title: 'Security assessment for application network services using fault injection', authors: 'H Kang, DH Lee - Pacific-Asia Workshop on Intelligence and Security Informatics, 172-183', type: 'conference' },
  { year: '2007', title: 'Integrated OTP Authentication and Security Analysis', authors: 'IS Kim, HW Kang, JI Lim - Convergence Security Journal 7 (3), 101-107', type: 'domestic' },
  { year: '2006', title: 'A model for security vulnerability pattern', authors: 'H Kang, K Kim, S Hong, DH Lee - International Conference on Computational Science and Its Applications, 385-394', type: 'conference' },
  { year: '2006', title: 'Design an Algorithm Matching TCP Connection Pairs for Intruder Traceback', authors: 'K Hyung-Woo, H Soon-Jwa - The KIPS Transactions: PartC 13 (1), 11-18', type: 'domestic' },
  { year: '2005', title: 'Security Protocol Design for Wireless Mobile Communication', authors: 'Hyung-Woo Kang, Sy-Youn Lee, Chang-Seop Park, Dong-Hoon Lee, E-Joong Yoon - Korean Institute of Information Scientists and Engineers', type: 'domestic' },
  { year: '2004', title: 'Matching connection pairs', authors: 'HW Kang, SJ Hong, DH Lee - International Conference on Parallel and Distributed Computing: Applications and Technologies, 642-649', type: 'conference' },
  { year: '2003', title: 'A New Intruder Traceback Mechanism based on System Process Structure.', authors: 'H Kang, J Park, G Nam, S Park, J Lee - CAINE, 117-121', type: 'conference' },
  { year: '2002', title: 'The Internet Mapping Framework for Security Management', authors: 'Dae-Sik Choi, Hyung-Woo Kang, Geon-Woo Nam - Korean Institute of Information Scientists and Engineers 29 (21), 481-483', type: 'domestic' },
  { year: '2000', title: 'Design of Malicious Code Analysis System Based on Reverse Engineering', authors: 'JK Song, YD Oh, HW Kang, JS Lee - Korean Society for Internet Information 1 (2), 273-276', type: 'domestic' },
  { year: '1999', title: 'Design of Authentication Protocol for IMT-2000', authors: 'HU Gang, LJ Yun, SY Lee, CS Park, DH Lee - The Transactions of the Korea Information Processing Society 6 (8), 2133-2144', type: 'domestic' },
  { year: '1997', title: 'Properties of k-BNLC Languages', authors: 'Hyung-Woo Kang, Dong-Hoon Lee - Korean Institute of Information Scientists and Engineers 24 (2IV), 520-523', type: 'domestic' },
];

const Papers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'total';
  const page = parseInt(searchParams.get('page') || '1', 10);

  const bannerSrc = `${process.env.PUBLIC_URL}/background/publications.jpg`;

  const filtered = activeTab === 'total'
    ? papers
    : papers.filter(p => p.type === activeTab);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const displayed = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleTabChange = (tab) => setSearchParams({ tab, page: '1' });
  const setPage = (p) => setSearchParams(prev => {
    const next = new URLSearchParams(prev);
    next.set('page', String(p));
    return next;
  });

  const getDisplayNo = (paper) => {
    const idx = papers.findIndex(p => p.title === paper.title);
    return papers.length - idx;
  };

  return (
    <div className="papers-page">
      <Helmet>
        <title>Publications | 고려대 금융보안 연구실</title>
        <meta name="description" content="고려대학교 금융보안 연구실(Finsec Lab) 연구 논문 및 발표 목록. 고려대 정보보호대학원 금융보안 연구 성과." />
        <link rel="canonical" href="https://finseclab.korea.ac.kr/publications" />
      </Helmet>

      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>Publications</h1>
      </div>

      {/* Content */}
      <div className="page-content">
        <h2 className="page-section-title">Papers</h2>
        <hr className="page-section-divider" />

        {/* Tab Filter */}
        <div className="tab-filter">
          <button className={activeTab === 'total' ? 'active' : ''} onClick={() => handleTabChange('total')}>
            Total
          </button>
          <button className={activeTab === 'international' ? 'active' : ''} onClick={() => handleTabChange('international')}>
            International Papers
          </button>
          <button className={activeTab === 'domestic' ? 'active' : ''} onClick={() => handleTabChange('domestic')}>
            Domestic Papers
          </button>
          <button className={activeTab === 'conference' ? 'active' : ''} onClick={() => handleTabChange('conference')}>
            Conference Papers
          </button>
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
            {displayed.map((paper, i) => (
              <tr key={i}>
                <td className="num-col">{getDisplayNo(paper)}</td>
                <td className="title-col">
                  {paper.title}
                  <span className="paper-authors">{paper.authors}</span>
                </td>
                <td className="date-col">{paper.year}</td>
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

export default Papers;
