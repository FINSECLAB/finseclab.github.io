import React from 'react';
import { Link } from 'react-router-dom';
import './ProfessorKang.css';

const ProfessorKang = () => {
  return (
    <div className="page professor-page">
      <div className="professor-container">
        <div className="professor-header">
          <Link to="/members" className="back-link">← Members</Link>
        </div>

        <div className="professor-content">
          <div className="professor-section">
            <div className="basic-info-wrapper">
              <div className="professor-photo-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/people-photos/강형우 교수님.jpg`}
                  alt="강형우 교수 프로필"
                  className="professor-photo"
                />
              </div>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Name</span>
                  <span className="info-value">Hyungwoo Kang</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Affiliations</span>
                  <span className="info-value">Professor, Korea University</span>
                </div>
                <div className="info-item">
                  <span className="info-value">
                    <a 
                      href="https://scholar.google.com/citations?user=_2nejHwAAAAJ&hl=en" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="scholar-link"
                    >
                      Google Scholar
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="professor-section">
            <h2 className="section-title">Education</h2>
            <ul className="info-list">
              <li>Aug. 2006: Ph.D. in information security, Korea University, South Korea</li>
              <li>Feb. 1999: M.S. in computer science, Korea University, South Korea</li>
              <li>Feb. 1997: B.S. in computer science, Korea University, South Korea</li>
            </ul>
          </div>

          <div className="professor-section">
            <h2 className="section-title">Professional Experience</h2>
            <ul className="info-list">
              <li>Mar. 2025 – Present: Professor, School of Cybersecurity, Korea University</li>
              <li>Feb. 2023 – Jan. 2024: Financial Supervisory Service (FSS) "Financial Security Regulation Advancement Task Force" External Advisor</li>
              <li>Mar. 2022 – Feb. 2024: Outside Director, KG Inicis</li>
              <li>Apr. 2021 – Feb. 2025: Expert Advisor, Kim & Chang Law Office</li>
              <li>Sep. 2018 - Dec. 2019: Adjunct Professor, Konkuk University</li>
              <li>Sep. 2006 – Feb. 2021: Head of Information Security Team, Financial Supervisory Service (FSS)</li>
              <li>Feb. 1999 – Sep. 2006: Senior Researcher, National Security Research Institute</li>
            </ul>
          </div>

          <div className="professor-section">
            <h2 className="section-title">Affiliations</h2>
            <ul className="info-list">
              <li>Mar. 2025 - Present: 금융위원회 소프트웨어사업 과업심의위원회</li>
              <li>May. 2025 – Present: External Evaluation Committee Member (Financial Data Sector), Financial Supervisory Service (FSS)</li>
              <li>     2024 - Present: 개인정보보호위원회 개인정보 안심구역 지정심사위원</li>
              <li>May. 2023 – Present: Steering Committee Member, Digital Asset Policy Forum</li>
              <li>Jan. 2023 – Present: Steering Committee Member, Financial Security Forum</li>
              <li>Jan. 2021 – Present: Chair, Financial Security Research Group, Korea Institute of Information Security & Cryptology (KIISC)</li>
              <li>Jan. 2020 – Present: Expert Committee Member, Future Security Technology Forum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorKang;

