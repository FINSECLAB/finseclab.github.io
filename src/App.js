import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Faculty from './pages/Faculty';
import ProfessorKang from './pages/ProfessorKang';
import Papers from './pages/Papers';
import Projects from './pages/Projects';
import About from './pages/About';
import News from './pages/News';
import { setupPageAnimations } from './utils/scrollAnimation';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // DOM이 완전히 로드된 후 애니메이션 초기화
    const timer = setTimeout(() => {
      setupPageAnimations();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    // 모든 페이지에서 처음부터 블러 적용 (5px)
    document.documentElement.style.setProperty('--bg-blur', '5px');

    return () => {
      // 컴포넌트 언마운트 시 블러 초기화는 하지 않음 (다음 페이지로 전환 시 유지)
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/members" element={<Faculty />} />
          <Route path="/professor-kang" element={<ProfessorKang />} />
          <Route path="/publications" element={<Papers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
