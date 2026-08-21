import React from 'react';
import Seo from '../components/Seo';
import './Contact.css';
import { useLanguage } from '../LanguageContext';

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
          If you are interested in Finsec Lab, please contact us by email.
          <br />
          ※ CV and Academic Transcript attachment required ※
        </p>
      </div>
    </div>
  );
};

export default Contact;
