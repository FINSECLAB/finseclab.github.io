import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import HomeKo from './pages/Home_ko';
import Contact from './pages/Contact';
import ContactKo from './pages/Contact_ko';
import Faculty from './pages/Faculty';
import FacultyKo from './pages/Faculty_ko';
import ProfessorKang from './pages/ProfessorKang';
import ProfessorKangKo from './pages/ProfessorKang_ko';
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

function AppContent() {
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setupPageAnimations();
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, lang]);

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-blur', '5px');

    return () => {};
  }, [location.pathname]);

  const isKo = lang === 'KO';

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={isKo ? <HomeKo /> : <Home />} />
          <Route path="/about" element={isKo ? <AboutKo /> : <About />} />
          <Route path="/news" element={isKo ? <NewsKo /> : <News />} />
          <Route path="/members" element={isKo ? <FacultyKo /> : <Faculty />} />
          <Route path="/professor-kang" element={isKo ? <ProfessorKangKo /> : <ProfessorKang />} />
          <Route path="/publications" element={isKo ? <PapersKo /> : <Papers />} />
          <Route path="/contact" element={isKo ? <ContactKo /> : <Contact />} />
          <Route path="/projects" element={isKo ? <ProjectsKo /> : <Projects />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
