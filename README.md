# FinSec Lab Website

FinSec Lab 연구소 공식 웹사이트입니다.

## 주요 기능

- 반응형 웹 디자인
- 스크롤 애니메이션
- 투명한 헤더 네비게이션
- 히어로 섹션 텍스트 페이드 효과
- 연구소 소개, 연구 분야, 공지사항, 소식 섹션

## 기술 스택

- React
- React Router
- CSS3
- JavaScript (ES6+)

## 설치 및 실행

1. 의존성 설치
```bash
npm install
```

2. 개발 서버 실행
```bash
npm start
```

3. 브라우저에서 http://localhost:3000 접속

## 빌드

```bash
npm run build
```

## 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Header.js       # 헤더 네비게이션
│   └── Footer.js       # 푸터
├── pages/              # 페이지 컴포넌트
│   ├── Home.js         # 홈페이지
│   ├── Contact.js      # 연락처
│   ├── Vision.js       # 비전 및 미션
│   └── ...
├── utils/              # 유틸리티 함수
│   └── scrollAnimation.js  # 스크롤 애니메이션
└── index.css           # 메인 스타일시트
```

## 라이선스

MIT License