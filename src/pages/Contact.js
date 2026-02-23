import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page contact-page">
      <Helmet>
        <title>Contact | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 금융보안연구실(Finsec Lab) 위치 및 연락처 안내. 고려대학교 정보보호대학원 금융보안연구실." />
      </Helmet>
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-item map-item">
            <div className="map-wrapper">
              <iframe
                src="https://maps.google.com/maps?q=Korea+University+Robot+Convergence+Building&output=embed&hl=en&z=17"
                title="Korea University Robot Convergence Building"
                className="map-iframe"
                allowFullScreen
              />
              <div className="map-text">
                <div className="contact-info-item">
                  <h4>Address</h4>
                  <p>Room 204, Robot Convergence Building,<br />145 Anam-ro, Seongbuk-gu, Seoul, 02841</p>
                </div>
                <div className="contact-info-item">
                  <h4>Lab Leader</h4>
                  <p>Junho Bae, bjhbae@korea.ac.kr</p>
                </div>
                <div className="contact-info-item">
                  <h4>Contact</h4>
                  <p>+82-2-3290-5944<br />finseclab0717@gmail.com</p>
                </div>
                <div className="contact-info-item">
                  <p style={{ marginTop: 'var(--space-4)', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    If you are interested in the FinSec Lab, please contact the Lab Leader.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;