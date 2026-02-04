import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 메인 푸터 상자 */}
        <div className="footer-box">
          <div className="footer-box-content">
            <div className="footer-box-section">
              <h4 className="footer-box-title">
                <span className="footer-icon">📍</span>
                연구실 위치
              </h4>
              <p>서울 성북구 안암로 145<br />고려대학교 안암캠퍼스<br />로봇융합관 204호</p>
            </div>
            <div className="footer-box-section">
              <h4 className="footer-box-title">
                <span className="footer-icon">📞</span>
                연락처
              </h4>
              <p>02-3290-5944</p>
            </div>
          </div>
        </div>
        
        {/* 하단 스트립 */}
        <div className="footer-bottom-strip">
          <div className="footer-links">
            <Link to="/contact">연락처</Link>
            <a href="#legal">법적고지</a>
            <a href="#privacy">개인정보처리방침</a>
            <a href="#accessibility">웹접근성</a>
            <span className="footer-ad">광고책임변호사 : 황광연</span>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2019-2025 연구소. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

