// 라우트별 언어 메타 (route: '' = 홈)
// Seo 컴포넌트(런타임)와 scripts/deploy.js(정적 HTML 생성)가 공유하는 단일 소스.
// 영어 페이지가 한국어 메타를 덮어쓰면 Google이 /en/을 /ko/의 중복으로 판단하므로
// 반드시 언어별로 다른 title/description을 유지할 것.
// CommonJS 형식: deploy.js(Node require)와 CRA(webpack import) 양쪽에서 사용 가능.
const routes = [
  {
    route: '',
    ko: {
      title: '고려대학교 금융보안연구실 | Finsec Lab',
      description: '고려대학교 정보보호대학원 금융보안연구실(Finsec Lab)입니다. 고려대 금융보안, 고려대학교 금융보안, 금융보안연구실, 강형우 교수 연구실.',
    },
    en: {
      title: 'Financial Security Lab (Finsec Lab) | Korea University',
      description: "Financial Security Lab (Finsec Lab) at the School of Cybersecurity, Korea University — research on financial security policy, financial cybersecurity, electronic financial authentication, and digital asset security.",
    },
  },
  {
    route: 'about',
    ko: {
      title: 'About | 고려대 금융보안연구실',
      description: '고려대학교 정보보호대학원 소속 금융보안연구실(Finsec Lab)을 소개합니다. 고려대 금융보안, 고려대학교 정보보호대학원 연구실.',
    },
    en: {
      title: 'About | Finsec Lab, Korea University',
      description: "About the Financial Security Lab (Finsec Lab) at Korea University's School of Cybersecurity — research areas and overview.",
    },
  },
  {
    route: 'news',
    ko: {
      title: 'News | 고려대 금융보안연구실',
      description: '고려대학교 금융보안연구실(Finsec Lab) 최신 소식 및 활동. 고려대 정보보호대학원 금융보안연구실 뉴스.',
    },
    en: {
      title: 'News | Finsec Lab, Korea University',
      description: 'Latest news and activities of the Financial Security Lab (Finsec Lab) at Korea University.',
    },
  },
  {
    route: 'members',
    ko: {
      title: 'Members | 고려대 금융보안연구실',
      description: '고려대학교 금융보안연구실(Finsec Lab) 구성원 소개. 고려대 정보보호대학원 금융보안 연구원.',
    },
    en: {
      title: 'Members | Finsec Lab, Korea University',
      description: 'Members of the Financial Security Lab (Finsec Lab) at Korea University — professor, researchers, and alumni.',
    },
  },
  {
    route: 'publications',
    ko: {
      title: 'Publications | 고려대 금융보안연구실',
      description: '고려대학교 금융보안연구실(Finsec Lab) 연구 논문 및 발표 목록. 고려대 정보보호대학원 금융보안 연구 성과.',
    },
    en: {
      title: 'Publications | Finsec Lab, Korea University',
      description: 'Publications and research papers of the Financial Security Lab (Finsec Lab) at Korea University.',
    },
  },
  {
    route: 'projects',
    ko: {
      title: 'Projects | 고려대 금융보안연구실',
      description: '고려대학교 금융보안연구실(Finsec Lab) 진행 중인 연구 프로젝트. 고려대 정보보호대학원 금융보안 프로젝트.',
    },
    en: {
      title: 'Projects | Finsec Lab, Korea University',
      description: 'Research projects of the Financial Security Lab (Finsec Lab) at Korea University.',
    },
  },
  {
    route: 'contact',
    ko: {
      title: 'Contact | 고려대 금융보안연구실',
      description: '고려대학교 금융보안연구실(Finsec Lab) 위치 및 연락처 안내. 고려대학교 정보보호대학원 금융보안연구실.',
    },
    en: {
      title: 'Contact | Finsec Lab, Korea University',
      description: 'Location and contact information of the Financial Security Lab (Finsec Lab) at Korea University.',
    },
  },
];

module.exports = routes;
