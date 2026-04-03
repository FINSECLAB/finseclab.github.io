import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
  const bannerSrc = `${process.env.PUBLIC_URL}/background/contact.jpg`;

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 위치 및 연락처 안내. 고려대학교 정보보호대학원 금융보안연구실." />
      </Helmet>

      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>Contact</h1>
      </div>

      {/* Content */}
      <div className="page-content">
        <h2 className="page-section-title">Location</h2>
        <hr className="page-section-divider" />

        {/* Google Map */}
        <div className="contact-map-wrapper">
          <iframe
            src="https://maps.google.com/maps?q=Korea+University+Robot+Convergence+Building&output=embed&hl=en&z=17"
            title="Korea University Robot Convergence Building"
            allowFullScreen
          />
        </div>

        {/* Contact Info Boxes */}
        <div className="contact-info-boxes">
          <div className="contact-info-box">
            <img src={`${process.env.PUBLIC_URL}/call.png`} alt="Tel" className="contact-info-box-icon" />
            <div>
              <p className="contact-info-box-label">Tel</p>
              <p className="contact-info-box-value">+82-2-3290-5944</p>
            </div>
          </div>
          <div className="contact-info-box">
            <img src={`${process.env.PUBLIC_URL}/mail.png`} alt="Mail" className="contact-info-box-icon" />
            <div>
              <p className="contact-info-box-label">Mail</p>
              <p className="contact-info-box-value">finseclab0717@gmail.com</p>
            </div>
          </div>
        </div>

        <p className="contact-cta">
          If you are interested in FinSec Lab, please contact us by email.
        </p>
      </div>
    </div>
  );
};

export default Contact;
