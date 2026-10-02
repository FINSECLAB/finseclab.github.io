import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import HeroCarousel from './HeroCarousel';

const images = [
  '/background/main.jpg',
  '/gallery/261001_02.png',
  '/gallery/261002_01.jpeg',
  '/gallery/261002_06.jpeg',
  '/gallery/260831.jpeg',
  '/gallery/260911_01.jpeg',
  '/gallery/260919_01.jpg',
].map(path => `${process.env.PUBLIC_URL}${path}`);

const activePhoto = () => document.querySelector('.hero-slide.is-active img').getAttribute('src');
const advance = () => act(() => jest.advanceTimersByTime(2500));
const originalMatchMedia = window.matchMedia;
let motionPreference;

beforeEach(() => {
  jest.useFakeTimers();
  jest.spyOn(document, 'visibilityState', 'get').mockReturnValue('visible');
  motionPreference = {
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };
  window.matchMedia = jest.fn(() => motionPreference);
});

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
  window.matchMedia = originalMatchMedia;
});

test('automatically cycles through the seven remaining images in order and wraps', () => {
  render(<HeroCarousel />);
  expect(Array.from(document.querySelectorAll('.hero-slide img'), img => img.getAttribute('src'))).toEqual(images);
  expect(activePhoto()).toBe(images[0]);
  expect(screen.getAllByRole('button')).toHaveLength(9);
  expect(screen.queryByRole('button', { name: /일시정지|재생|Pause|Play/ })).toBeNull();
  for (let index = 1; index <= images.length; index += 1) {
    advance();
    expect(activePhoto()).toBe(images[index % images.length]);
    expect(screen.getByRole('button', { name: `배너 ${index % images.length + 1} 보기` }).getAttribute('aria-current')).toBe('true');
  }
});

test.each([
  ['ko', '금융보안연구실', '이전 배너', '다음 배너', '배너 4 보기'],
  ['en', 'Financial Security Lab', 'Previous slide', 'Next slide', 'Show slide 4'],
])('%s arrows, dots and keyboard change only the background', (lang, heading, previous, next, dot) => {
  render(<HeroCarousel lang={lang} />);
  fireEvent.click(screen.getByRole('button', { name: previous }));
  expect(activePhoto()).toBe(images[images.length - 1]);
  fireEvent.click(screen.getByRole('button', { name: next }));
  expect(activePhoto()).toBe(images[0]);
  fireEvent.click(screen.getByRole('button', { name: dot }));
  expect(activePhoto()).toBe(images[3]);
  fireEvent.keyDown(screen.getByRole('button', { name: dot }), { key: 'ArrowRight' });
  expect(activePhoto()).toBe(images[4]);
  fireEvent.keyDown(screen.getByRole('button', { name: dot }), { key: 'ArrowLeft' });
  expect(activePhoto()).toBe(images[3]);
  expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(heading);
  advance();
  expect(activePhoto()).toBe(images[4]);
});

test('selecting even the current dot resets the full 2.5 second interval', () => {
  render(<HeroCarousel />);
  act(() => jest.advanceTimersByTime(2000));
  fireEvent.click(screen.getByRole('button', { name: '배너 1 보기' }));
  act(() => jest.advanceTimersByTime(2499));
  expect(activePhoto()).toBe(images[0]);
  act(() => jest.advanceTimersByTime(1));
  expect(activePhoto()).toBe(images[1]);
});

test('hover and control focus keep autoplay running; a hidden tab suspends it', () => {
  render(<HeroCarousel />);
  const banner = screen.getByRole('region', { name: '연구실 소개 배너' });
  fireEvent.mouseEnter(banner);
  fireEvent.focus(screen.getByRole('button', { name: '다음 배너' }));
  advance();
  expect(activePhoto()).toBe(images[1]);
  jest.spyOn(document, 'visibilityState', 'get').mockReturnValue('hidden');
  fireEvent(document, new Event('visibilitychange'));
  advance();
  expect(activePhoto()).toBe(images[1]);
  jest.spyOn(document, 'visibilityState', 'get').mockReturnValue('visible');
  fireEvent(document, new Event('visibilitychange'));
  advance();
  expect(activePhoto()).toBe(images[2]);
});

test('reduced motion starts paused while preserving manual selection', () => {
  motionPreference.matches = true;
  render(<HeroCarousel />);
  advance();
  expect(activePhoto()).toBe(images[0]);
  fireEvent.click(screen.getByRole('button', { name: '다음 배너' }));
  expect(activePhoto()).toBe(images[1]);
});

test('unmount removes the timer and motion listener', () => {
  const { unmount } = render(<HeroCarousel />);
  expect(jest.getTimerCount()).toBe(1);
  unmount();
  expect(jest.getTimerCount()).toBe(0);
  expect(motionPreference.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function));
});
