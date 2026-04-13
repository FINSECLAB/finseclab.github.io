const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// 배포용 homepage 설정
const deployHomepage = 'https://finseclab.korea.ac.kr';
const devHomepage = '.';

// App.js의 모든 React 라우터 경로 (크롤러 HTTP 200 대응)
const routes = [
  'about',
  'news',
  'members',
  'publications',
  'contact',
  'projects',
  'professor-kang',
];

console.log('🚀 배포 시작...');

// 1. homepage를 배포용으로 변경
console.log(`📝 homepage를 "${deployHomepage}"로 변경 중...`);
packageJson.homepage = deployHomepage;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

try {
  // 2. 빌드
  console.log('🔨 빌드 중...');
  execSync('npm run build', { stdio: 'inherit' });

  // 3. 각 라우트에 route.html 파일 생성 (서브디렉토리 방식 → 직접 파일 방식)
  // 이유: 서브디렉토리 방식은 /members → /members/ 301 리다이렉트를 유발해 Google이 오류로 인식
  console.log('📄 SEO용 라우트별 HTML 생성 중...');
  const buildDir = path.join(__dirname, '..', 'build');
  const indexHtmlPath = path.join(buildDir, 'index.html');
  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  for (const route of routes) {
    const routeHtml = baseHtml.replace(
      '<link rel="canonical" href="https://finseclab.korea.ac.kr/" />',
      `<link rel="canonical" href="https://finseclab.korea.ac.kr/${route}" />`
    );
    fs.writeFileSync(path.join(buildDir, `${route}.html`), routeHtml);
    console.log(`  ✅ build/${route}.html 생성`);
  }

  // 4. sitemap.xml lastmod를 오늘 날짜로 업데이트
  const today = new Date().toISOString().split('T')[0];
  const sitemapPath = path.join(buildDir, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  sitemap = sitemap.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`📅 sitemap.xml lastmod → ${today}`);

  // 5. 배포
  console.log('📤 GitHub Pages에 배포 중...');
  execSync('npx gh-pages -d build', { stdio: 'inherit' });

  console.log('✅ 배포 완료!');
} catch (error) {
  console.error('❌ 배포 실패:', error.message);
  process.exit(1);
} finally {
  // 6. homepage를 개발용으로 되돌림
  console.log(`📝 homepage를 "${devHomepage}"로 되돌리는 중...`);
  packageJson.homepage = devHomepage;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log('✨ 완료!');
}
