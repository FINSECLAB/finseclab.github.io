import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import seoMeta from '../data/seoMeta';

const BASE = 'https://finseclab.korea.ac.kr';

// 현재 URL의 언어를 기준으로 언어별 title/description + 자기참조 canonical + hreflang(ko/en/x-default) 출력.
// title/description을 여기서 함께 관리해야 영어 페이지가 한국어 메타로 덮이는 사고를 막는다
// (한/영 메타가 같으면 Google이 /en/을 /ko/의 중복 페이지로 판단함).
// routeKey: '' (홈) | 'about' | 'news' | 'members' | 'publications' | 'projects' | 'contact'
const Seo = ({ routeKey = '' }) => {
  const { pathname } = useLocation();
  const lang = pathname.split('/')[1] === 'en' ? 'en' : 'ko';

  // 홈은 trailing slash(/ko/), 하위는 파일 서빙(/ko/projects)
  const suffix = routeKey ? `/${routeKey}` : '/';
  const koUrl = `${BASE}/ko${suffix}`;
  const enUrl = `${BASE}/en${suffix}`;
  const selfUrl = lang === 'en' ? enUrl : koUrl;

  const meta = (seoMeta.find(r => r.route === routeKey) || seoMeta[0])[lang];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={selfUrl} />
      <link rel="alternate" hrefLang="ko" href={koUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={koUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={selfUrl} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'ko_KR'} />
    </Helmet>
  );
};

export default Seo;
