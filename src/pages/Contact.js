import React from 'react';
import Seo from '../components/Seo';
import './Contact.css';
import { useLanguage } from '../LanguageContext';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="contact-info-box-icon contact-info-box-icon-svg">
    <path d="M12 3.2c-.4 0-.77.14-1.06.4L3.6 9.86c-.4.35-.6.86-.6 1.4V19c0 1.1.9 2 2 2h3a1 1 0 0 0 1-1v-5c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v5a1 1 0 0 0 1 1h3c1.1 0 2-.9 2-2v-7.74c0-.54-.2-1.05-.6-1.4l-7.34-6.26a1.6 1.6 0 0 0-1.06-.4z" />
  </svg>
);

const Contact = () => {
  const { theme } = useLanguage();
  const bannerSrc = `${process.env.PUBLIC_URL}/background/contact.jpg`;
  const callIcon = `${process.env.PUBLIC_URL}/etc_logo/${theme === 'dark' ? 'call_w' : 'call'}.png`;
  const mailIcon = `${process.env.PUBLIC_URL}/etc_logo/${theme === 'dark' ? 'mail_w' : 'mail'}.png`;

  return (
    <div className="contact-page">
      <Seo routeKey="contact" />

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
          <div className="contact-info-box contact-info-box-full">
            <HomeIcon />
            <div>
              <p className="contact-info-box-label">Address</p>
              <p className="contact-info-box-value contact-info-box-value--strong">Room 211, Robot Convergence Building, 145 Anam-ro, Seongbuk-gu, Seoul, 02841</p>
            </div>
          </div>
          <div className="contact-info-box">
            <img src={callIcon} alt="Tel" className="contact-info-box-icon" />
            <div>
              <p className="contact-info-box-label">Tel</p>
              <a href="tel:+82-2-3290-5944" className="contact-info-box-value contact-info-link">+82-2-3290-5944</a>
            </div>
          </div>
          <div className="contact-info-box">
            <img src={mailIcon} alt="Mail" className="contact-info-box-icon" />
            <div>
              <p className="contact-info-box-label">Mail</p>
              <a href="mailto:finseclab0717@gmail.com" className="contact-info-box-value contact-info-link">finseclab0717@gmail.com</a>
            </div>
          </div>
        </div>

        <p className="contact-cta">
            If you are interested in FinSec Lab, please contact us by email.
          <br />
          ※ CV and Academic Transcript attachment required ※
        </p>
      </div>
    </div>
  );
};

export default Contact;
