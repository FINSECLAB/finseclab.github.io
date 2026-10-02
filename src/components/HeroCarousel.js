import React, { useEffect, useState } from 'react';
import './HeroCarousel.css';

export const HERO_INTERVAL_MS = 2500;

export const HERO_SLIDES = [
  { src: '/background/main.jpg', position: 'center center' },
  // Adjust the crop while keeping every slide full bleed.
  { src: '/gallery/261001_02.png', position: 'center 20%', desktopPosition: 'center 45%' },
  { src: '/gallery/261002_01.jpeg', position: 'center center' },
  { src: '/gallery/261002_06.jpeg', position: 'center center' },
  { src: '/gallery/260831.jpeg', position: 'center center' },
  { src: '/gallery/260911_01.jpeg', position: 'center center', desktopPosition: 'center 30%' },
  { src: '/gallery/260919_01.jpg', position: 'center center' },
];

const prefersReducedMotion = () => (
  typeof window !== 'undefined'
  && typeof window.matchMedia === 'function'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

const HeroCarousel = ({ lang = 'ko' }) => {
  const isKorean = lang === 'ko';
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);
  const [selectionVersion, setSelectionVersion] = useState(0);
  const [isPageHidden, setIsPageHidden] = useState(() => (
    typeof document !== 'undefined' && document.visibilityState === 'hidden'
  ));

  useEffect(() => {
    const updateVisibility = () => setIsPageHidden(document.visibilityState === 'hidden');
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = (event) => {
      setReducedMotion(event.matches);
    };

    if (preference.addEventListener) {
      preference.addEventListener('change', updateMotionPreference);
      return () => preference.removeEventListener('change', updateMotionPreference);
    }
    if (preference.addListener) {
      preference.addListener(updateMotionPreference);
      return () => preference.removeListener(updateMotionPreference);
    }
    return undefined;
  }, []);

  useEffect(() => {
    if (reducedMotion || isPageHidden) return undefined;

    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % HERO_SLIDES.length);
    }, HERO_INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, reducedMotion, isPageHidden, selectionVersion]);

  const showSlide = (index) => {
    setActiveIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
    setSelectionVersion((version) => version + 1);
  };

  const handleControlsKeyDown = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }
  };

  return (
    <section
      className="hero hero-carousel"
      aria-label={isKorean ? '연구실 소개 배너' : 'Lab introduction banner'}
      aria-roledescription="carousel"
      aria-live="off"
    >
      <div className="hero-slides" aria-hidden="true">
        {HERO_SLIDES.map((slide, index) => (
          <div
            className={`hero-slide${index === activeIndex ? ' is-active' : ''}`}
            key={slide.src}
            style={{
              '--hero-image-position': slide.position,
              '--hero-image-position-desktop': slide.desktopPosition || slide.position,
            }}
          >
            <img
              className="hero-slide-image"
              src={`${process.env.PUBLIC_URL}${slide.src}`}
              alt=""
              draggable={false}
              loading={index === activeIndex || index === (activeIndex + 1) % HERO_SLIDES.length ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div className="hero-content animate-slide-up">
        <p className="hero-subtitle">{isKorean ? '고려대학교' : 'Korea University'}</p>
        <h1 className="hero-title notranslate">{isKorean ? '금융보안연구실' : 'Financial Security Lab'}</h1>
      </div>

      <div
        className="hero-controls"
        role="group"
        aria-label={isKorean ? '배너 전환' : 'Slideshow controls'}
        onKeyDown={handleControlsKeyDown}
      >
        <button
          className="hero-control-arrow"
          type="button"
          aria-label={isKorean ? '이전 배너' : 'Previous slide'}
          onClick={() => showSlide(activeIndex - 1)}
        >
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" focusable="false">
            <path d="M12 2 3 8l9 6Z" fill="currentColor" />
          </svg>
        </button>
        {HERO_SLIDES.map((slide, index) => (
          <button
            className={`hero-dot${index === activeIndex ? ' is-active' : ''}`}
            key={slide.src}
            type="button"
            aria-label={isKorean ? `배너 ${index + 1} 보기` : `Show slide ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => showSlide(index)}
          >
            <span className="hero-dot-mark" aria-hidden="true" />
          </button>
        ))}
        <button
          className="hero-control-arrow"
          type="button"
          aria-label={isKorean ? '다음 배너' : 'Next slide'}
          onClick={() => showSlide(activeIndex + 1)}
        >
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" focusable="false">
            <path d="m4 2 9 6-9 6Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
