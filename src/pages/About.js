import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const researchBars = [
  { text: 'Financial Security Policies and Regulations', bg: '#EDD5D5', color: '#1a1a1a' },
  { text: 'Financial Cybersecurity', bg: '#D8B8B8', color: '#1a1a1a' },
  { text: 'Electronic Financial Authentication', bg: '#BE9090', color: '#ffffff' },
  { text: 'Vulnerability Analysis and Penetration Testing of Electronic Financial Infrastructure', bg: '#9A5050', color: '#ffffff' },
  { text: 'Digital Asset Security Technology', bg: '#843030', color: '#ffffff' },
  { text: 'Zero Trust Implementation Strategy for the Financial Sector', bg: '#7B031D', color: '#ffffff' },
];

const About = () => {
  const bannerSrc = `${process.env.PUBLIC_URL}/background/about.jpg`;

  return (
    <div className="about-page">
      <Helmet>
        <title>About | 고려대 금융보안 연구실</title>
        <meta name="description" content="고려대학교 정보보호대학원 소속 금융보안 연구실(Finsec Lab)을 소개합니다. 고려대 금융보안, 고려대학교 정보보호대학원 연구실." />
        <link rel="canonical" href="https://finseclab.korea.ac.kr/about" />
      </Helmet>

      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>About</h1>
      </div>

      {/* Content */}
      <div className="page-content">
        <h2 className="page-section-title">Research area</h2>
        <hr className="page-section-divider" />

        <p className="about-intro-text">
          Ongoing hacking incidents in the financial sector and personal information leaks have prompted financial companies to intensify their efforts to strengthen information security.
        </p>
        <p className="about-intro-text">
          The Finsec Lab concurrently conducts research on information security regulations and policies tailored to the financial sector, alongside research into information security technologies.
        </p>
        <br></br>

        <h3 className="research-subjects-subheading">Main research subjects</h3>

        {researchBars.map((bar, i) => (
          <div
            key={i}
            className="research-bar"
            style={{ backgroundColor: bar.bg, color: bar.color }}
          >
            {bar.text}
          </div>
        ))}
        <br></br>

        <p className="about-intro-text" style={{ marginTop: '2rem' }}>
          In particular, we are focusing our research on methodologies for security inspections of financial institutions to ensure compliance with relevant laws such as the ELECTRONIC FINANCIAL TRANSACTIONS ACT, the PERSONAL INFORMATION PROTECTION ACT, and the CREDIT INFORMATION USE AND PROTECTION ACT; network segregation regulations within the financial sector; security verification of electronic financial systems; and electronic financial authentication techniques.
        </p>
      </div>
    </div>
  );
};

export default About;
