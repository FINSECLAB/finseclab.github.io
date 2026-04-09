import React from 'react';

const Footer_ko = () => {
  const logoSrc = `${process.env.PUBLIC_URL}/logo/정보보호대학원 03.png`;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-lab-name">
            고려대학교 금융보안연구실 &nbsp;|&nbsp;{' '}
            <a href="tel:+82-2-3290-5944" className="footer-link">02-3290-5944</a>
            &nbsp;|&nbsp;{' '}
            <a href="mailto:finseclab0717@gmail.com" className="footer-link">finseclab0717@gmail.com</a>
          </p>
          <p className="footer-address">
            (우 02841) 서울특별시 성북구 안암로 145 고려대학교 자연계캠퍼스 로봇융합관 211호
          </p>
          <p className="footer-copyright">
            COPYRIGHT ⓒ 2026 Finsec Lab, Korea University. All rights reserved.
          </p>
        </div>
        <div className="footer-right">
          <img
            src={logoSrc}
            alt="고려대학교 정보보호대학원"
            className="footer-logo-img"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer_ko;
