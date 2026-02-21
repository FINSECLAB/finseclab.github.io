import React from 'react';
import { Link } from 'react-router-dom';
import './ProfessorKang.css';

const ProfessorKang_ko = () => {
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
                  <span className="info-label">성명</span>
                  <span className="info-value">강형우</span>
                </div>
                <div className="info-item">
                  <span className="info-label">소속</span>
                  <span className="info-value">고려대학교 정보보호대학원 전임교수</span>
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
            <h2 className="section-title">학력</h2>
            <ul className="info-list">
              <li>2006. 08. 고려대학교 정보보호대학원 정보보호학과 (박사)</li>
              <li>1999. 02. 고려대학교 전산학과 (석사)</li>
              <li>1997. 02. 고려대학교 전산학과 (학사)</li>
            </ul>
          </div>

          <div className="professor-section">
            <h2 className="section-title">주요 경력</h2>
            <ul className="info-list">
              <li>2025. 03. ～ [현재] 고려대학교 정보보호대학원 전임교수</li>
              <li>2023. 02. ～ 2024. 01. 금융위원회 "금융보안규제선진화TF" 민간자문위원</li>
              <li>2022. 03. ～ 2024. 02. (주)KG이니시스 사외이사</li>
              <li>2021. 04. ～ 2025. 02. 김·장 법률사무소 전문위원</li>
              <li>2018. 09. ～ 2019. 12. 건국대학교 정보통신대학원 겸임교수</li>
              <li>2006. 09. ～ 2021. 02. 금융감독원 정보보안팀 팀장</li>
              <li>1999. 02. ～ 2006. 09. 한국전자통신연구원(ETRI) 부호기술부 선임연구원</li>
            </ul>
          </div>

          <div className="professor-section">
            <h2 className="section-title">현직</h2>
            <ul className="info-list">
              <li>2025. 03. ～ [현재] 금융위원회 소프트웨어사업 과업심의위원회</li>
              <li>2025. 05. ～ [현재] 금융감독원 금융데이터분야 외부평가위원</li>
              <li>2024. ～ [현재] 개인정보보호위원회 개인정보 안심구역 지정심사위원</li>
              <li>2023. 05. ～ [현재] 디지털자산정책포럼 운영위원</li>
              <li>2023. 01. ～ [현재] 금융보안포럼 운영위원</li>
              <li>2021. 01. ～ [현재] 한국정보보호학회 금융보안연구회 위원장</li>
              <li>2020. 01. ～ [현재] 미래보안기술포럼 전문위원</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorKang_ko;
