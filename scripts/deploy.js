const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const deployHomepage = 'https://finseclab.korea.ac.kr';
const devHomepage = '.';

// App.js의 React 라우터 경로 목록 (각 경로를 {route}.html로 서빙해 크롤러에 200 반환)
const routes = [
  'about',
  'news',
  'members',
  'publications',
  'contact',
  'projects',
];

console.log('🚀 배포 시작...');

packageJson.homepage = deployHomepage;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

let deployError = null;

try {
  execSync('npm run build', { stdio: 'inherit' });

  // 각 라우트에 {route}.html 생성 (canonical 교체)
  // 서브디렉토리 방식은 /members → /members/ 301 리다이렉트를 유발하므로 파일 방식 사용
  const buildDir = path.join(__dirname, '..', 'build');
  const baseHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

  for (const route of routes) {
    const html = baseHtml.replace(
      '<link rel="canonical" href="https://finseclab.korea.ac.kr/" />',
      `<link rel="canonical" href="https://finseclab.korea.ac.kr/${route}" />`
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
