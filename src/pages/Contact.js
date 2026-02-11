import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-item map-item">
            <div className="map-wrapper">
              <img 
                src={`${process.env.PUBLIC_URL}/연구실위치.png`} 
                alt="연구실 위치 지도" 
                className="map-image"
              />
              <div className="map-text">
                <div className="contact-info-item">
                  <h4>Address</h4>
                  <p>Room 204, Robot Convergence Building,<br />145 Anam-ro, Seongbuk-gu, Seoul, 02841</p>
                </div>
                <div className="contact-info-item">
                  <h4>Lab Director</h4>
                  <p>Junho Bae, bjhbae@korea.ac.kr</p>
                </div>
                <div className="contact-info-item">
                  <h4>Contact</h4>
                  <p>+82-2-3290-5944<br />finseclab0717@gmail.com</p>
                </div>
                <div className="contact-info-item">
                  <p style={{ marginTop: 'var(--space-4)', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    If you are interested in the FinSec Lab, please contact the Lab Director.
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