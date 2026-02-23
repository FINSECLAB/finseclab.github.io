import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Papers.css';

const Papers = () => {
  const papers = [
    { year: '2025', title: 'Analysis of Financial Security Risks in Decentralized Finance (DeFi) Using Real Transaction Data', authors: 'Junho Bae, Cheonho Park, Cholsoo Go, Hyungwoo Kang - CISC 35 (2), 968-971' },
    { year: '2024', title: 'Concurrent two-party key exchange with forward unlinkability in internet of drones', authors: 'JY Jeong, HW Kang, IR Jeong - IEEE Access 12, 77250-77256' },
    { year: '2021', title: 'The Meaning and Issues of the Reform of the Electronic Financial Transaction Act', authors: 'H Kang - KISO Journal 44 (KISO), pp. 19-22' },
    { year: '2008', title: 'Security Assessment Framework Using Static Analysis and Fault Injection', authors: 'H Kang - International Conference on Intelligent Computing, 679-687' },
    { year: '2007', title: 'Security assessment for application network services using fault injection', authors: 'H Kang, DH Lee - Pacific-Asia Workshop on Intelligence and Security Informatics, 172-183' },
    { year: '2007', title: 'Integrated OTP Authentication and Security Analysis', authors: 'IS Kim, HW Kang, JI Lim - Convergence Security Journal 7 (3), 101-107' },
    { year: '2006', title: 'A model for security vulnerability pattern', authors: 'H Kang, K Kim, S Hong, DH Lee - International Conference on Computational Science and Its Applications, 385-394' },
    { year: '2006', title: 'Design an Algorithm Matching TCP Connection Pairs for Intruder Traceback', authors: 'K Hyung-Woo, H Soon-Jwa - The KIPS Transactions: PartC 13 (1), 11-18' },
    { year: '2005', title: 'Security Protocol Design for Wireless Mobile Communication', authors: 'Hyung-Woo Kang, Sy-Youn Lee, Chang-Seop Park, Dong-Hoon Lee, E-Joong Yoon - Korean Institute of Information Scientists and Engineers' },
    { year: '2004', title: 'Matching connection pairs', authors: 'HW Kang, SJ Hong, DH Lee - International Conference on Parallel and Distributed Computing: Applications and Technologies, 642-649' },
    { year: '2003', title: 'A New Intruder Traceback Mechanism based on System Process Structure.', authors: 'H Kang, J Park, G Nam, S Park, J Lee - CAINE, 117-121' },
    { year: '2002', title: 'The Internet Mapping Framework for Security Management', authors: 'Dae-Sik Choi, Hyung-Woo Kang, Geon-Woo Nam - Korean Institute of Information Scientists and Engineers 29 (21), 481-483' },
    { year: '2000', title: 'Design of Malicious Code Analysis System Based on Reverse Engineering', authors: 'JK Song, YD Oh, HW Kang, JS Lee - Korean Society for Internet Information 1 (2), 273-276' },
    { year: '1999', title: 'Design of Authentication Protocol for IMT-2000', authors: 'HU Gang, LJ Yun, SY Lee, CS Park, DH Lee - The Transactions of the Korea Information Processing Society 6 (8), 2133-2144' },
    { year: '1997', title: 'Properties of k-BNLC Languages', authors: 'Hyung-Woo Kang, Dong-Hoon Lee - Korean Institute of Information Scientists and Engineers 24 (2IV), 520-523' },
  ];

  return (
    <div className="page papers-page">
      <Helmet>
        <title>Publications | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 연구 논문 및 발표 목록. 고려대 정보보호대학원 금융보안 연구 성과." />
      </Helmet>
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
