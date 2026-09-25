import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext();
const colorSchemeQuery = '(prefers-color-scheme: dark)';

const getSystemTheme = () => (
  typeof window.matchMedia === 'function' && window.matchMedia(colorSchemeQuery).matches
    ? 'dark'
    : 'light'
);

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

  const [theme, setTheme] = useState(getSystemTheme);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;

    const mediaQuery = window.matchMedia(colorSchemeQuery);
    const syncSystemTheme = ({ matches }) => setTheme(matches ? 'dark' : 'light');

    // 매 방문 및 시스템 설정 변경 시 시스템 테마를 따른다.
    syncSystemTheme(mediaQuery);
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncSystemTheme);
      return () => mediaQuery.removeEventListener('change', syncSystemTheme);
    }

    // 구형 Safari의 MediaQueryList API 지원.
    mediaQuery.addListener(syncSystemTheme);
    return () => mediaQuery.removeListener(syncSystemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  // <html lang> 을 현재 언어와 동기화 (접근성/SEO)
  useEffect(() => {
    document.documentElement.lang = lang === 'EN' ? 'en' : 'ko';
  }, [lang]);

  // 언어 전환: 현재 경로의 언어 접두사만 교체하고 path·query·hash 보존
  const getLanguagePath = (newLang) => {
    const target = newLang === 'EN' ? 'en' : 'ko';
    const suffix = location.pathname.replace(/^\/(?:ko|en)(?=\/|$)/, '') || '/';
    return `/${target}${suffix}${location.search}${location.hash}`;
  };

  const setLang = (newLang) => navigate(getLanguagePath(newLang));

  return (
    <LanguageContext.Provider value={{ lang, setLang, getLanguagePath, theme, setTheme }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
