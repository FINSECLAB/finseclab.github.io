import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FooterKo from './components/Footer_ko';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import HomeKo from './pages/Home_ko';
import Contact from './pages/Contact';
import ContactKo from './pages/Contact_ko';
import Faculty from './pages/Faculty';
import FacultyKo from './pages/Faculty_ko';
import Papers from './pages/Papers';
import PapersKo from './pages/Papers_ko';
import Projects from './pages/Projects';
import ProjectsKo from './pages/Projects_ko';
import About from './pages/About';
import AboutKo from './pages/About_ko';
import News from './pages/News';
import NewsKo from './pages/News_ko';
import { setupPageAnimations } from './utils/scrollAnimation';
import { LanguageProvider, useLanguage } from './LanguageContext';

// 브라우저 언어 기준으로 ko/en 선택
const detectLang = () => {
  const nav = (typeof navigator !== 'undefined' ? navigator.language : '') || '';
  return nav.toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en';
};

// 루트('/') 클라이언트 진입 시 브라우저 언어로 분기
function RootRedirect() {
  return <Navigate to={`/${detectLang()}/`} replace />;
}

// /:lang 가 ko/en 이 아니면 한국어로 정규화, 맞으면 하위 라우트 렌더
function LangLayout() {
  const { lang } = useParams();
  if (lang !== 'ko' && lang !== 'en') {
    return <Navigate to="/ko/" replace />;
  }
  return <Outlet />;
}

// /:lang 하위의 알 수 없는 경로 → 해당 언어 홈
function LangNotFound() {
  const { lang } = useParams();
  const safe = lang === 'en' ? 'en' : 'ko';
  return <Navigate to={`/${safe}/`} replace />;
}

function AppContent() {
  const location = useLocation();
  const { lang } = useLanguage();
  const isKo = lang === 'KO';

  useEffect(() => {
    const timer = setTimeout(() => {
      setupPageAnimations();
    }, 300);
    return () => clearTimeout(timer);
  }, [location.pathname, lang]);

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<RootRedirect />} />

          {/* 언어 접두사 라우트 (/ko/*, /en/*) */}
          <Route path="/:lang" element={<LangLayout />}>
            <Route index element={isKo ? <HomeKo /> : <Home />} />
            <Route path="about" element={isKo ? <AboutKo /> : <About />} />
            <Route path="news" element={isKo ? <NewsKo /> : <News />} />
            <Route path="members" element={isKo ? <FacultyKo /> : <Faculty />} />
            <Route path="publications" element={isKo ? <PapersKo /> : <Papers />} />
            <Route path="contact" element={isKo ? <ContactKo /> : <Contact />} />
            <Route path="projects" element={isKo ? <ProjectsKo /> : <Projects />} />
            <Route path="*" element={<LangNotFound />} />
          </Route>

          {/* 기존 bare URL → 한국어로 영구 이전 */}
          <Route path="/about" element={<Navigate to="/ko/about" replace />} />
          <Route path="/news" element={<Navigate to="/ko/news" replace />} />
          <Route path="/members" element={<Navigate to="/ko/members" replace />} />
          <Route path="/publications" element={<Navigate to="/ko/publications" replace />} />
          <Route path="/contact" element={<Navigate to="/ko/contact" replace />} />
          <Route path="/projects" element={<Navigate to="/ko/projects" replace />} />

          {/* 그 외 → 한국어 홈 */}
          <Route path="*" element={<Navigate to="/ko/" replace />} />
        </Routes>
      </main>
      {isKo ? <FooterKo /> : <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <LanguageProvider>
        <ScrollToTop />
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}

export default App;
