import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext();

// pathname의 첫 세그먼트로 언어 판별 (기본값: 한국어)
const langFromPath = (pathname) => {
  const seg = pathname.split('/')[1];
  return seg === 'en' ? 'EN' : 'KO';
};

// LanguageProvider는 반드시 <Router> 내부에 위치해야 한다 (useLocation/useNavigate 사용).
export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = langFromPath(location.pathname);

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // <html lang> 을 현재 언어와 동기화 (접근성/SEO)
  useEffect(() => {
    document.documentElement.lang = lang === 'EN' ? 'en' : 'ko';
  }, [lang]);

  // 언어 전환: 현재 경로의 언어 접두사만 교체하고 path·query·hash 보존
  const setLang = (newLang) => {
    const target = newLang === 'EN' ? 'en' : 'ko';
    const parts = location.pathname.split('/');
    if (parts[1] === 'ko' || parts[1] === 'en') {
      parts[1] = target;
    } else {
      parts.splice(1, 0, target);
    }
    navigate(parts.join('/') + location.search + location.hash);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, theme, setTheme }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
