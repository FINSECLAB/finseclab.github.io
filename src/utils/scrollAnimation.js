// 스크롤 애니메이션 유틸리티
let scrollObserver = null;
let heroFadeCleanup = null;

export const initScrollAnimation = () => {
  // 기존 observer 정리
  if (scrollObserver) {
    scrollObserver.disconnect();
  }

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -200px 0px'
  };

  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 모든 섹션에 동일한 지연 적용
        const delay = 100;
        
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, delay);
      } else {
        // 화면에서 벗어나면 애니메이션 클래스 제거 (다시 스크롤할 때 애니메이션 반복)
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  // 모든 섹션에 애니메이션 적용
  const sections = document.querySelectorAll('.section');
  sections.forEach(el => {
    scrollObserver.observe(el);
  });

  return scrollObserver;
};

// 히어로 섹션 텍스트 사라지는 효과
export const initHeroTextFade = () => {
  // 기존 이벤트 리스너 정리
  if (heroFadeCleanup) {
    heroFadeCleanup();
  }

  const heroContent = document.querySelector('.hero-content');
  const scrollHint = document.querySelector('.scroll-hint');
  
  if (!heroContent || !scrollHint) return null;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const fadeThreshold = 50; // 50px 스크롤 시부터 페이드 시작
    const maxFade = 300; // 300px까지 페이드 완료
    
    if (scrollY > fadeThreshold) {
      const progress = Math.min(1, (scrollY - fadeThreshold) / maxFade);
      const opacity = 1 - progress;
      const translateY = -progress * 100; // 위로 올라가는 효과
      
      heroContent.style.opacity = opacity;
      heroContent.style.transform = `translateY(${translateY}px)`;
      scrollHint.style.opacity = opacity;
      scrollHint.style.transform = `translateX(-50%) translateY(${translateY}px)`;
      
      if (scrollY > fadeThreshold + maxFade) {
        heroContent.style.visibility = 'hidden';
        scrollHint.style.visibility = 'hidden';
      } else {
        heroContent.style.visibility = 'visible';
        scrollHint.style.visibility = 'visible';
      }
    } else {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
      heroContent.style.visibility = 'visible';
      scrollHint.style.opacity = '1';
      scrollHint.style.transform = 'translateX(-50%) translateY(0)';
      scrollHint.style.visibility = 'visible';
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // 초기 상태 설정
  heroContent.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
  scrollHint.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
  
  // 정리 함수 저장
  heroFadeCleanup = () => {
    window.removeEventListener('scroll', handleScroll);
  };
  
  return heroFadeCleanup;
};

// 페이지 로드 시 애니메이션 초기화
export const setupPageAnimations = () => {
  // requestAnimationFrame을 사용하여 DOM이 완전히 렌더링된 후 실행
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // 두 번의 requestAnimationFrame으로 렌더링 완료 보장
      initScrollAnimation();
      initHeroTextFade();
    });
  });
};
