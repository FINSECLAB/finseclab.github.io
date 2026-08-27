const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const HP = 'https://finseclab.korea.ac.kr';
const devHomepage = '.';

// 라우트별 언어 메타 — src/data/seoMeta.js 단일 소스 (Seo 컴포넌트와 공유)
const routes = require('../src/data/seoMeta');

// 빌드된 index.html(미니파이됨) 내 치환 앵커.
// Helmet(Seo) 관리 태그는 public/index.html에서 data-rh="true"를 달아두므로 앵커도 이를 포함해야 함
// (그래야 런타임에 Helmet이 정적 태그를 '교체'하고 canonical 등이 중복되지 않음).
const ANCHORS = {
  htmlLang: '<html lang="ko">',
  title: '<title>고려대학교 금융보안연구실 | FinSec Lab</title>',
  description: '<meta name="description" content="고려대학교 금융보안연구실" data-rh="true"/>',
  canonical: '<link rel="canonical" href="https://finseclab.korea.ac.kr/" data-rh="true"/>',
  ogTitle: '<meta property="og:title" content="고려대학교 금융보안연구실 | FinSec Lab" data-rh="true"/>',
  ogDescription: '<meta property="og:description" content="고려대학교 정보보호대학원 금융보안연구실(FinSec Lab)입니다. 고려대 금융보안, 금융보안연구실, 강형우 교수 연구실." data-rh="true"/>',
  ogUrl: '<meta property="og:url" content="https://finseclab.korea.ac.kr" data-rh="true"/>',
  ogType: '<meta property="og:type" content="website"/>',
};

// Helmet 관리 태그와 동일하게 data-rh="true"를 부여 (canonical/hreflang/og:locale/description/og:* 공통)
const hreflangLinks = (koUrl, enUrl) =>
  `<link rel="alternate" hreflang="ko" href="${koUrl}" data-rh="true"/>` +
  `<link rel="alternate" hreflang="en" href="${enUrl}" data-rh="true"/>` +
  `<link rel="alternate" hreflang="x-default" href="${koUrl}" data-rh="true"/>`;

// 치환이 실제로 일어났는지 검증하며 replace (미니파이 산출물이 바뀌면 즉시 실패)
function replaceOrThrow(html, find, replaceWith, label) {
  if (!html.includes(find)) {
    throw new Error(`치환 앵커를 찾지 못함 (${label}): ${find}`);
  }
  return html.split(find).join(replaceWith);
}

function renderPage(base, lang, route, meta) {
  const suffix = route ? `/${route}` : '/';
  const koUrl = `${HP}/ko${suffix}`;
  const enUrl = `${HP}/en${suffix}`;
  const selfUrl = lang === 'en' ? enUrl : koUrl;
  const locale = lang === 'en' ? 'en_US' : 'ko_KR';

  let html = base;
  html = replaceOrThrow(html, ANCHORS.htmlLang, `<html lang="${lang}">`, 'html lang');
  html = replaceOrThrow(html, ANCHORS.canonical,
    `<link rel="canonical" href="${selfUrl}" data-rh="true"/>` + hreflangLinks(koUrl, enUrl), 'canonical');
  html = replaceOrThrow(html, ANCHORS.title, `<title>${meta.title}</title>`, 'title');
  html = replaceOrThrow(html, ANCHORS.description,
    `<meta name="description" content="${meta.description}" data-rh="true"/>`, 'description');
  html = replaceOrThrow(html, ANCHORS.ogTitle,
    `<meta property="og:title" content="${meta.title}" data-rh="true"/>`, 'og:title');
  html = replaceOrThrow(html, ANCHORS.ogDescription,
    `<meta property="og:description" content="${meta.description}" data-rh="true"/>`, 'og:description');
  html = replaceOrThrow(html, ANCHORS.ogUrl,
    `<meta property="og:url" content="${selfUrl}" data-rh="true"/>`, 'og:url');
  html = replaceOrThrow(html, ANCHORS.ogType,
    `${ANCHORS.ogType}<meta property="og:locale" content="${locale}" data-rh="true"/>`, 'og:locale');
  return html;
}

// 루트 index.html: SPA 셸 유지 + 홈 hreflang + canonical은 한국어 홈 기준
function renderRoot(base) {
  const koUrl = `${HP}/ko/`;
  const enUrl = `${HP}/en/`;
  let html = base;
  html = replaceOrThrow(html, ANCHORS.canonical,
    `<link rel="canonical" href="${koUrl}" data-rh="true"/>` + hreflangLinks(koUrl, enUrl), 'root canonical');
  html = replaceOrThrow(html, ANCHORS.ogType,
    `${ANCHORS.ogType}<meta property="og:locale" content="ko_KR" data-rh="true"/>`, 'root og:locale');
  return html;
}

// 기존 bare URL → /ko/<route> 정적 리다이렉트 스텁 (마이그레이션용, HTTP 200)
function redirectStub(route) {
  const target = `/ko/${route}`;
  const canonical = `${HP}/ko/${route}`;
  return `<!doctype html><html lang="ko"><head><meta charset="utf-8"/>` +
    `<title>FinSec Lab</title>` +
    `<link rel="canonical" href="${canonical}"/>` +
    `<meta http-equiv="refresh" content="0; url=${target}"/>` +
    `<script>location.replace('${target}'+location.search+location.hash);</script>` +
    `</head><body>Redirecting to <a href="${target}">${canonical}</a></body></html>`;
}

console.log('🚀 배포 시작...');

packageJson.homepage = HP;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

let deployError = null;

try {
  execSync('npm run build', { stdio: 'inherit' });

  const buildDir = path.join(__dirname, '..', 'build');
  const baseHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

  // 언어별 디렉터리 생성
  for (const lang of ['ko', 'en']) {
    fs.mkdirSync(path.join(buildDir, lang), { recursive: true });
  }

  // (언어 × 라우트) 정적 HTML 생성
  for (const { route, ko, en } of routes) {
    for (const [lang, meta] of [['ko', ko], ['en', en]]) {
      const html = renderPage(baseHtml, lang, route, meta);
      const outPath = route
        ? path.join(buildDir, lang, `${route}.html`)
        : path.join(buildDir, lang, 'index.html');
      fs.writeFileSync(outPath, html);
      console.log(`  ✅ build/${lang}/${route || 'index'}.html`);
    }
  }

  // 기존 bare URL 마이그레이션 스텁
  for (const { route } of routes) {
    if (!route) continue;
    fs.writeFileSync(path.join(buildDir, `${route}.html`), redirectStub(route));
    console.log(`  ↪️  build/${route}.html → /ko/${route}`);
  }

  // 루트 index.html (SPA 셸 + 홈 hreflang)
  fs.writeFileSync(path.join(buildDir, 'index.html'), renderRoot(baseHtml));
  console.log('  ✅ build/index.html (root, hreflang)');

  // sitemap.xml lastmod 오늘 날짜로 갱신
  const today = new Date().toISOString().split('T')[0];
  const sitemapPath = path.join(buildDir, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  sitemap = sitemap.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`📅 sitemap.xml lastmod → ${today}`);

  if (process.env.SKIP_PUBLISH === '1') {
    console.log('⏭️  SKIP_PUBLISH=1 → gh-pages 게시 생략 (빌드/생성만 수행)');
  } else {
    execSync('npx gh-pages -d build', { stdio: 'inherit' });
    console.log('✅ 배포 완료!');
  }
} catch (error) {
  deployError = error;
  console.error('❌ 배포 실패:', error.message);
} finally {
  packageJson.homepage = devHomepage;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`📝 homepage → "${devHomepage}"`);
  if (deployError) process.exit(1);
}
