const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// 배포용 homepage 설정
const deployHomepage = 'https://finseclab.github.io';
const devHomepage = '.';

console.log('🚀 배포 시작...');

// 1. homepage를 배포용으로 변경
console.log(`📝 homepage를 "${deployHomepage}"로 변경 중...`);
packageJson.homepage = deployHomepage;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

try {
  // 2. 빌드 및 배포
  console.log('🔨 빌드 중...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('📤 GitHub Pages에 배포 중...');
  execSync('npx gh-pages -d build', { stdio: 'inherit' });
  
  console.log('✅ 배포 완료!');
} catch (error) {
  console.error('❌ 배포 실패:', error.message);
  process.exit(1);
} finally {
  // 3. homepage를 개발용으로 되돌림
  console.log(`📝 homepage를 "${devHomepage}"로 되돌리는 중...`);
  packageJson.homepage = devHomepage;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log('✨ 완료!');
}



