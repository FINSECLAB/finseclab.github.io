import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-item map-item">
            <h3>지도</h3>
            <div className="map-wrapper">
              <img 
                src={`${process.env.PUBLIC_URL}/연구실위치.png`} 
                alt="연구실 위치 지도" 
                className="map-image"
              />
              <div className="map-text">
                <div className="contact-info-item">
                  <h4>위치</h4>
                  <p>서울 성북구 안암로 145<br />고려대학교 안암캠퍼스<br />로봇융합관 204호</p>
                </div>
                <div className="contact-info-item">
                  <h4>랩장</h4>
                  <p>배준호, bjhbae@korea.ac.kr</p>
                </div>
                <div className="contact-info-item">
                  <h4>연락처</h4>
                  <p>02-3290-5944<br />finseclab0717@gmail.com</p>
                </div>
                <div className="contact-info-item">
                  <p style={{ marginTop: 'var(--space-4)', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    연구실에 관심있으신 분들은 랩장 혹은 위 이메일로 연락주시기 바랍니다.
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