import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
  return (
    <div className="page about-page">
      <Helmet>
        <title>About | 고려대 금융보안연구실</title>
        <meta name="description" content="고려대학교 정보보호대학원 소속 금융보안연구실(Finsec Lab)을 소개합니다. 고려대 금융보안, 고려대학교 정보보호대학원 연구실." />
      </Helmet>
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title notranslate">About</h1>
          <div className="intro-text">
            <p>Ongoing hacking incidents in the financial sector and personal information leaks have prompted financial companies to intensify their efforts to strengthen information security. The Finsec Lab concurrently conducts research on information security regulations and policies tailored to the financial sector, alongside research into information security technologies.</p>
            <p>The main research subjects are as follows.</p>
            <ul style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-6)' }}>
              <li>Financial Security Policies and Regulations</li>
              <li>Financial Cybersecurity</li>
              <li>Electronic Financial Authentication</li>
              <li>Vulnerability Analysis and Penetration Testing of Electronic Financial Infrastructure</li>
              <li>Digital Asset Security Technology</li>
              <li>Zero Trust Implementation Strategy for the Financial Sector</li>
            </ul>
            <p style={{ marginTop: 'var(--space-4)' }}>In particular, we are focusing our research on methodologies for security inspections of financial institutions to ensure compliance with relevant laws such as the ELECTRONIC FINANCIAL TRANSACTIONS ACT, the PERSONAL INFORMATION PROTECTION ACT, and the CREDIT INFORMATION USE AND PROTECTION ACT; network segregation regulations within the financial sector; security verification of electronic financial systems; and electronic financial authentication techniques.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

