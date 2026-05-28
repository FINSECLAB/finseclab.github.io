import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import './Papers.css';

const ITEMS_PER_PAGE = 4;

const papers = [
  { year: '2026', title: '금융회사에서 LLM을 활용한 CTI-to-MITRE ATT&CK 매핑 기반 위협 헌팅', authors: '이재형, 강형우 - 정보보호학회논문지 36권 2호 pp.681 - 696', type: 'domestic' },
  { year: '2026', title: '금융권 AI 시스템 위협 식별: MITRE ATLAS 기반 시나리오 매핑 및 기술적 • 관리적 통제 방안', authors: '정혜성, 강형우 - 정보보호학회논문지 36권 2호 pp.697 - 717', type: 'domestic' },
  { year: '2026', title: 'AutoFlow：Large Language Model을 이용한 엔터프라이즈 맞춤 Attack Flow 생성', authors: '장은지, 강형우 - 정보보호학회논문지 36권 2호 pp.735 - 751', type: 'domestic' },
  { year: '2026' ,title: '금융권 망분리 환경에서 AI 모델 개발 및 활용에 관한 연구', authors: '임시온, 강형우 - 한국정보보호학회 학술발표논문집 36 (1)', type: 'conference' },
  { year: '2026' ,title: 'EIP-7702 스폰서 기반 위임 철회 메커니즘 설계', authors: '조은, 배준호, 강형우 - 한국정보보호학회 학술발표논문집 36 (1)', type: 'conference' },
  { year: '2025', title: '탈중앙화 금융(DeFi) 환경에서의 실거래 데이터 기반 금융보안 리스크 분석', authors: '배준호, 박천호, 고철수, 강형우 - 한국정보보호학회 학술발표논문집 35 (2), 968-971', type: 'conference' },
  { year: '2024', title: 'Concurrent two-party key exchange with forward unlinkability in internet of drones', authors: 'JY Jeong, HW Kang, IR Jeong - IEEE Access 12, 77250-77256', type: 'international' },
  { year: '2021', title: '전자금융거래법 개정의 의의 및 쟁점', authors: '강형우 - KISO Journal 44 (KISO), pp. 19-22', type: 'domestic' },
  { year: '2008', title: 'Security Assessment Framework Using Static Analysis and Fault Injection', authors: 'H Kang - International Conference on Intelligent Computing, 679-687', type: 'conference' },
  { year: '2007', title: 'Security assessment for application network services using fault injection', authors: 'H Kang, DH Lee - Pacific-Asia Workshop on Intelligence and Security Informatics, 172-183', type: 'conference' },
  { year: '2007', title: '통합 OTP 인증 및 보안성 분석', authors: 'IS Kim, HW Kang, JI Lim - 융합보안논문지 7 (3), 101-107', type: 'domestic' },
  { year: '2006', title: 'A model for security vulnerability pattern', authors: 'H Kang, K Kim, S Hong, DH Lee - International Conference on Computational Science and Its Applications, 385-394', type: 'conference' },
  { year: '2006', title: '침입자 역추적을 위한 TCP 연결 매칭 알고리즘 설계', authors: 'K Hyung-Woo, H Soon-Jwa - 정보처리학회논문지 C 13 (1), 11-18', type: 'domestic' },
  { year: '2005', title: '무선 이동 통신을 위한 보안 프로토콜 설계', authors: '강형우, 이수언, 박창섭, 이동훈, 윤이중 - 한국정보과학회 학술발표논문집 25 (2), 541-543', type: 'domestic' },
  { year: '2004', title: 'Matching connection pairs', authors: 'HW Kang, SJ Hong, DH Lee - International Conference on Parallel and Distributed Computing: Applications and Technologies, 642-649', type: 'conference' },
  { year: '2003', title: 'A New Intruder Traceback Mechanism based on System Process Structure.', authors: 'H Kang, J Park, G Nam, S Park, J Lee - CAINE, 117-121', type: 'conference' },
  { year: '2002', title: '인터넷에서의 보안관리를 위한 네트워크 맵핑 프레임워크', authors: '최대식, 강형우, 남건우 - 한국정보과학회 학술발표논문집 29 (1), 481-483', type: 'domestic' },
  { year: '2000', title: '역공학에 기초한 악성코드분석시스템의 설계', authors: '송진국, 오염덕, 강형우, 이진석 - 한국인터넷정보학회 학술발표논문집 1 (2), 273-276', type: 'domestic' },
  { year: '1999', title: 'IMT-2000 인증 프로토콜 설계', authors: '강형우, 윤이중, 이수연, 박창섭, 이동훈 - 한국정보처리학회 논문지 6 (8), 2133-2144', type: 'domestic' },
  { year: '1997', title: 'k-BNLC 언어의 성질', authors: '강형우, 이동훈 - 한국정보과학회 학술발표논문집 24 (2IV), 520-523', type: 'domestic' },
];

const Papers_ko = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'total';
  const page = parseInt(searchParams.get('page') || '1', 10);

  const bannerSrc = `${process.env.PUBLIC_URL}/background/publications.jpg`;

  const filtered = activeTab === 'total' ? papers : papers.filter(p => p.type === activeTab);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const displayed = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleTabChange = (tab) => setSearchParams({ tab, page: '1' });
  const setPage = (p) => setSearchParams(prev => {
    const next = new URLSearchParams(prev);
    next.set('page', String(p));
    return next;
  });
  const getDisplayNo = (paper) => papers.length - papers.findIndex(p => p.title === paper.title);

  return (
    <div className="papers-page">
      <Helmet>
        <title>Publications | 고려대 금융보안 연구실</title>
        <meta name="description" content="고려대학교 금융보안 연구실(Finsec Lab) 연구 논문 및 발표 목록." />
        <link rel="canonical" href="https://finseclab.korea.ac.kr/publications" />
      </Helmet>

      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>Publications</h1>
      </div>

      <div className="page-content">
        <h2 className="page-section-title">논문</h2>
        <hr className="page-section-divider" />

        <div className="tab-filter">
          <button className={activeTab === 'total' ? 'active' : ''} onClick={() => handleTabChange('total')}>전체</button>
          <button className={activeTab === 'international' ? 'active' : ''} onClick={() => handleTabChange('international')}>국제 논문</button>
          <button className={activeTab === 'domestic' ? 'active' : ''} onClick={() => handleTabChange('domestic')}>국내 논문</button>
          <button className={activeTab === 'conference' ? 'active' : ''} onClick={() => handleTabChange('conference')}>학술 논문</button>
        </div>

        <div className="table-scroll-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th className="num-col">No.</th>
              <th className="title-col">제목</th>
              <th className="date-col">연도</th>
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

export default Papers_ko;
