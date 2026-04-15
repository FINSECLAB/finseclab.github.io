import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useLanguage } from '../LanguageContext';

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, theme, setTheme } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  const logoSrc = `${process.env.PUBLIC_URL}/logo/금융보안연구실 로고 02.png`;

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/" onClick={handleLogoClick}>
              <img src={logoSrc} alt="Finsec Lab Logo" className="nav-logo-img" />
              <h1>Finsec Lab</h1>
            </Link>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/members" className={`nav-link ${isActive('/members') ? 'active' : ''}`} onClick={closeMenu}>
                Members
              </Link>
              <div className="nav-dropdown">
                <Link to="/members?tab=professor" className="nav-dropdown-item" onClick={closeMenu}>Professor</Link>
                <Link to="/members?tab=researcher" className="nav-dropdown-item" onClick={closeMenu}>Researcher</Link>
                <Link to="/members?tab=alumni" className="nav-dropdown-item" onClick={closeMenu}>Alumni</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/publications" className={`nav-link ${isActive('/publications') ? 'active' : ''}`} onClick={closeMenu}>
                Publications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className={`nav-link ${isActive('/news') ? 'active' : ''}`} onClick={closeMenu}>
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`} onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item lang-toggle-item">
              <button
                className="lang-toggle"
                onClick={() => setLang(lang === 'EN' ? 'KO' : 'EN')}
                title={lang === 'EN' ? '한국어로 전환' : 'Switch to English'}
              >
                <GlobeIcon />
              </button>
              <button
                className="theme-toggle"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                title={theme === 'light' ? '다크 모드' : '라이트 모드'}
              >
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>
            </li>
          </ul>

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
