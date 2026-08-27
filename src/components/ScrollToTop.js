import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// 언어 접두사(/ko, /en)를 뗀 나머지 경로 — 언어 전환은 이 부분이 그대로 유지됨
const stripLangPrefix = (pathname) => {
  const parts = pathname.split('/');
  if (parts[1] === 'ko' || parts[1] === 'en') {
    return '/' + parts.slice(2).join('/');
  }
  return pathname;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevSubPath = useRef(stripLangPrefix(pathname));

  useEffect(() => {
    const subPath = stripLangPrefix(pathname);
    // 실제 페이지가 바뀐 경우에만 맨 위로 스크롤 — 언어 전환(스크롤 위치 유지)은 제외
    if (subPath !== prevSubPath.current) {
      window.scrollTo(0, 0);
    }
    prevSubPath.current = subPath;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
