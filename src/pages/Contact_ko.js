import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact_ko = () => {
  const bannerSrc = `${process.env.PUBLIC_URL}/background/contact.jpg`;

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 위치 및 연락처 안내." />
      </Helmet>

      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>Contact</h1>
      </div>

      <div className="page-content">
        <h2 className="page-section-title">위치</h2>
        <hr className="page-section-divider" />

        <div className="contact-map-wrapper">
          <iframe
            src="https://maps.google.com/maps?q=고려대학교+로봇융합관&output=embed&hl=ko&z=17"
            title="고려대학교 서울캠퍼스 로봇융합관"
            allowFullScreen
          />
        </div>

        <div className="contact-info-boxes">
          <div className="contact-info-box">
            <img src={`${process.env.PUBLIC_URL}/call.png`} alt="전화" className="contact-info-box-icon" />
            <div>
              <p className="contact-info-box-label">전화</p>
              <p className="contact-info-box-value">02-3290-5944</p>
            </div>
          </div>
          <div className="contact-info-box">
            <img src={`${process.env.PUBLIC_URL}/mail.png`} alt="이메일" className="contact-info-box-icon" />
            <div>
              <p className="contact-info-box-label">이메일</p>
              <p className="contact-info-box-value">finseclab0717@gmail.com</p>
            </div>
          </div>
        </div>

        <p className="contact-cta">
          금융보안 연구실에 관심이 있으신 분들은 이메일로 연락주시기 바랍니다.
        </p>
      </div>
    </div>
  );
};

export default Contact_ko;
