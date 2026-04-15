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
];

console.log('🚀 배포 시작...');

// 1. homepage를 배포용으로 변경
console.log(`📝 homepage를 "${deployHomepage}"로 변경 중...`);
packageJson.homepage = deployHomepage;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

try {
  // 2. 빌드 (postbuild에서 react-snap이 자동 실행되어 각 라우트 프리렌더링)
  console.log('🔨 빌드 및 프리렌더링 중...');
  execSync('npm run build', { stdio: 'inherit' });

  // 3. react-snap이 생성한 프리렌더링 HTML을 {route}.html로 복사
  // 이유: 서브디렉토리 방식(/members/index.html)은 /members → /members/ 301 리다이렉트 발생
  //       파일 방식(/members.html)은 trailing slash 없이 직접 서빙
  console.log('📄 프리렌더링 HTML을 라우트별 파일로 복사 중...');
  const buildDir = path.join(__dirname, '..', 'build');
  const indexHtmlPath = path.join(buildDir, 'index.html');
  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  for (const route of routes) {
    const snapHtmlPath = path.join(buildDir, route, 'index.html');
    const targetHtmlPath = path.join(buildDir, `${route}.html`);

    if (fs.existsSync(snapHtmlPath)) {
      // react-snap이 프리렌더링한 HTML 사용 (실제 콘텐츠 포함 → SEO 최적)
      fs.copyFileSync(snapHtmlPath, targetHtmlPath);
      console.log(`  ✅ build/${route}.html ← react-snap 프리렌더링 적용`);
    } else {
      // 폴백: canonical만 교체한 기본 index.html (CSR)
      const routeHtml = baseHtml.replace(
        '<link rel="canonical" href="https://finseclab.korea.ac.kr/" />',
        `<link rel="canonical" href="https://finseclab.korea.ac.kr/${route}" />`
      );
      fs.writeFileSync(targetHtmlPath, routeHtml);
      console.log(`  ⚠️  build/${route}.html ← 폴백 (프리렌더링 없음, CSR)`);
    }
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
  // process.exit() 전에 homepage 복구 (finally는 process.exit에서 실행 안 됨)
  packageJson.homepage = devHomepage;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`📝 homepage를 "${devHomepage}"로 되돌림`);
  process.exit(1);
} finally {
  // 6. homepage를 개발용으로 되돌림
  console.log(`📝 homepage를 "${devHomepage}"로 되돌리는 중...`);
  packageJson.homepage = devHomepage;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log('✨ 완료!');
}
