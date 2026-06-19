import React from 'react';

const Footer = () => {
  const logoSrc = `${process.env.PUBLIC_URL}/logo/정보보호대학원 03.png`;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-lab-name">
            Finsec Lab, Korea University &nbsp;|&nbsp;{' '}
            <a href="tel:+82-2-3290-5944" className="footer-link">+82-2-3290-5944</a>
            &nbsp;|&nbsp;{' '}
            <a href="mailto:finseclab0717@gmail.com" className="footer-link">finseclab0717@gmail.com</a>
          </p>
          <p className="footer-address">
            Room 210-211, Robot Convergence Building, 145 Anam-ro, Seongbuk-gu, Seoul, 02841
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

export default Footer;
