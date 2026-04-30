const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const deployHomepage = 'https://finseclab.korea.ac.kr';
const devHomepage = '.';

// 각 라우트의 페이지별 메타 정보
// Google이 페이지를 고유하게 인식하려면 title/description이 달라야 함
const routes = {
  about: {
    title: 'About | 고려대 금융보안 연구실',
    description: '고려대학교 정보보호대학원 소속 금융보안 연구실(Finsec Lab)을 소개합니다. 고려대 금융보안, 고려대학교 정보보호대학원 연구실.',
  },
  news: {
    title: 'News | 고려대 금융보안 연구실',
    description: '고려대학교 금융보안 연구실(Finsec Lab) 최신 소식 및 활동. 고려대 정보보호대학원 금융보안 연구실 뉴스.',
  },
  members: {
    title: 'Members | 고려대 금융보안 연구실',
    description: '고려대학교 금융보안 연구실(Finsec Lab) 구성원 소개. 고려대 정보보호대학원 금융보안 연구원.',
  },
  publications: {
    title: 'Publications | 고려대 금융보안 연구실',
    description: '고려대학교 금융보안 연구실(Finsec Lab) 연구 논문 및 발표 목록. 고려대 정보보호대학원 금융보안 연구 성과.',
  },
  contact: {
    title: 'Contact | 고려대 금융보안 연구실',
    description: '고려대학교 금융보안 연구실(Finsec Lab) 위치 및 연락처 안내. 고려대학교 정보보호대학원 금융보안 연구실.',
  },
  projects: {
    title: 'Projects | 고려대 금융보안 연구실',
    description: '고려대학교 금융보안 연구실(Finsec Lab) 진행 중인 연구 프로젝트. 고려대 정보보호대학원 금융보안 프로젝트.',
  },
};

console.log('🚀 배포 시작...');

packageJson.homepage = deployHomepage;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

let deployError = null;

try {
  execSync('npm run build', { stdio: 'inherit' });

  // 각 라우트에 {route}.html 생성
  // 서브디렉토리 방식은 /members → /members/ 301 리다이렉트를 유발하므로 파일 방식 사용
  // title/description/OG 태그를 페이지별로 다르게 설정해야
  // Google이 동일 콘텐츠로 오인하지 않고 각 페이지를 독립적으로 색인함
  const buildDir = path.join(__dirname, '..', 'build');
  const baseHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

  for (const [route, meta] of Object.entries(routes)) {
    const url = `${deployHomepage}/${route}`;
    const html = baseHtml
      .replace(
        '<link rel="canonical" href="https://finseclab.korea.ac.kr/"/>',
        `<link rel="canonical" href="${url}"/>`
      )
      .replace(
        '<title>고려대학교 금융보안 연구실 | Finsec Lab</title>',
        `<title>${meta.title}</title>`
      )
      .replace(
        '<meta name="description" content="고려대학교 금융보안 연구실"/>',
        `<meta name="description" content="${meta.description}"/>`
      )
      .replace(
        '<meta property="og:title" content="고려대학교 금융보안 연구실 | Finsec Lab"/>',
        `<meta property="og:title" content="${meta.title}"/>`
      )
      .replace(
        '<meta property="og:description" content="고려대학교 정보보호대학원 금융보안 연구실(Finsec Lab)입니다. 고려대 금융보안, 금융보안 연구실, 강형우 교수 연구실."/>',
        `<meta property="og:description" content="${meta.description}"/>`
      )
      .replace(
        '<meta property="og:url" content="https://finseclab.korea.ac.kr"/>',
        `<meta property="og:url" content="${url}"/>`
      );
    fs.writeFileSync(path.join(buildDir, `${route}.html`), html);
    console.log(`  ✅ build/${route}.html`);
  }

  // sitemap.xml lastmod를 오늘 날짜로 업데이트
  const today = new Date().toISOString().split('T')[0];
  const sitemapPath = path.join(buildDir, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  sitemap = sitemap.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`📅 sitemap.xml lastmod → ${today}`);

  execSync('npx gh-pages -d build', { stdio: 'inherit' });
  console.log('✅ 배포 완료!');
} catch (error) {
  deployError = error;
  console.error('❌ 배포 실패:', error.message);
} finally {
  packageJson.homepage = devHomepage;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`📝 homepage → "${devHomepage}"`);
  if (deployError) process.exit(1);
}
