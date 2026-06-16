import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE = 'https://finseclab.korea.ac.kr';

// 현재 URL의 언어를 기준으로 자기참조 canonical + hreflang(ko/en/x-default) 출력.
// routeKey: '' (홈) | 'about' | 'news' | 'members' | 'publications' | 'projects' | 'contact'
const Seo = ({ routeKey = '' }) => {
  const { pathname } = useLocation();
  const lang = pathname.split('/')[1] === 'en' ? 'en' : 'ko';

  // 홈은 trailing slash(/ko/), 하위는 파일 서빙(/ko/projects)
  const suffix = routeKey ? `/${routeKey}` : '/';
  const koUrl = `${BASE}/ko${suffix}`;
  const enUrl = `${BASE}/en${suffix}`;
  const selfUrl = lang === 'en' ? enUrl : koUrl;

  return (
    <Helmet>
      <html lang={lang} />
      <link rel="canonical" href={selfUrl} />
      <link rel="alternate" hrefLang="ko" href={koUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={koUrl} />
      <meta property="og:url" content={selfUrl} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'ko_KR'} />
    </Helmet>
  );
};

export default Seo;
