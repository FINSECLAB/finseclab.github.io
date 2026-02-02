import React from 'react';
import './Papers.css';

const Papers = () => {
  const papers = [
    { year: '2025', title: '탈중앙화 금융(DeFi) 환경에서의 실거래 데이터 기반 금융보안 리스크 분석', authors: '배준호, 박천호, 고철수, 강형우 - 한국정보보호학회 학술발표논문집 35 (2), 968-971' },
    { year: '2024', title: 'Concurrent two-party key exchange with forward unlinkability in internet of drones', authors: 'JY Jeong, HW Kang, IR Jeong - IEEE Access 12, 77250-77256' },
    { year: '2021', title: 'The Meaning and Issues of the Reform of the Electronic Financial Transaction Act', authors: 'H Kang - KISO Journal 44 (KISO), pp. 19-22' },
    { year: '2008', title: 'Security Assessment Framework Using Static Analysis and Fault Injection', authors: 'H Kang - International Conference on Intelligent Computing, 679-687' },
    { year: '2007', title: 'Security assessment for application network services using fault injection', authors: 'H Kang, DH Lee - Pacific-Asia Workshop on Intelligence and Security Informatics, 172-183' },
    { year: '2007', title: 'Integrated OTP Authentication and Security Analysis', authors: 'IS Kim, HW Kang, JI Lim - Convergence Security Journal 7 (3), 101-107' },
    { year: '2006', title: 'A model for security vulnerability pattern', authors: 'H Kang, K Kim, S Hong, DH Lee - International Conference on Computational Science and Its Applications, 385-394' },
    { year: '2006', title: 'Design an Algorithm Matching TCP Connection Pairs for Intruder Traceback', authors: 'K Hyung-Woo, H Soon-Jwa - The KIPS Transactions: PartC 13 (1), 11-18' },
    { year: '2005', title: '무선 이동 통신을 위한 보안 프로토콜 계', authors: '강형우, 이수언, 박창섭, 이동훈, 윤이중' },
    { year: '2004', title: 'Matching connection pairs', authors: 'HW Kang, SJ Hong, DH Lee - International Conference on Parallel and Distributed Computing: Applications ...' },
    { year: '2003', title: 'A New Intruder Traceback Mechanism based on System Process Structure.', authors: 'H Kang, J Park, G Nam, S Park, J Lee - CAINE, 117-121' },
    { year: '2002', title: '인터넷에서의 보안관리를 위한 네트워크 맵핑 프레임워크', authors: '최대식, 강형우, 남건우 - 한국정보과학회 학술발표논문집 29 (21), 481-483' },
    { year: '2000', title: '역공학에 기초한 악성코드분석시스템의 설계', authors: '송진국, 오염덕, 강형우, 이진석 - 한국인터넷정보학회 학술발표대회 논문집 1 (2), 273-276' },
    { year: '1999', title: 'Design of Authentication Protocol for IMT-2000', authors: 'HU Gang, LJ Yun, SY Lee, CS Park, DH Lee - The Transactions of the Korea Information Processing Society 6 (8), 2133-2144' },
    { year: '1997', title: 'k-BNLC 언어들의 성질들', authors: '강형우, 이동훈 - 한국정보과학회 학술발표논문집 24 (2IV), 520-523' },
  ];

  return (
    <div className="page papers-page">
      <div className="papers-container">
        <div className="papers-content">
          <h1 className="papers-title">Publications</h1>
          {papers.map((paper, index) => (
            <p key={index}>
              [{paper.year}] {paper.title}<br />
              <span className="paper-authors">{paper.authors}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Papers;
