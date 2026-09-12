import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Link, MemoryRouter, Route, Routes } from 'react-router-dom';
import Seo from '../components/Seo';
import Gallery from './Gallery';
import GalleryKo from './Gallery_ko';
import GalleryDetail from './GalleryDetail';
import GalleryDetailKo from './GalleryDetail_ko';

const renderGallery = (lang, detail = false) => render(
  <HelmetProvider>
    <MemoryRouter
      initialEntries={[`/${lang}/gallery${detail ? '/7' : ''}`]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Link to={`/${lang}/`}>Home</Link>
      <Routes>
        <Route path="/ko/gallery" element={<GalleryKo />} />
        <Route path="/en/gallery" element={<Gallery />} />
        <Route path="/ko/gallery/:id" element={<GalleryDetailKo />} />
        <Route path="/en/gallery/:id" element={<GalleryDetail />} />
        <Route path="/:lang/" element={<Seo />} />
      </Routes>
    </MemoryRouter>
  </HelmetProvider>
);

test.each([
  ['ko', '2026 제5회 금융보안워크숍', '서울 여의도 FKI타워'],
  ['en', '2026 5th Financial Security Workshop', 'FKI Tower, Yeouido, Seoul'],
])('%s workshop is first and opens both requested photos', (lang, title, location) => {
  renderGallery(lang);
  const thumbnail = screen.getAllByRole('img')[0];
  expect(thumbnail.alt).toBe(title);
  expect(thumbnail.closest('a').getAttribute('href')).toBe(`/${lang}/gallery/7`);

  // The photo surface must still open the post with a normal primary click.
  fireEvent.click(thumbnail.parentElement);
  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(title);
  expect(screen.getByText(location)).toBeTruthy();
  expect(screen.getAllByRole('img').map(img => img.getAttribute('src'))).toEqual([
    `${process.env.PUBLIC_URL}/gallery/260911_01.jpeg`,
    `${process.env.PUBLIC_URL}/gallery/260911_02.jpg`,
  ]);
  screen.getAllByRole('img').forEach(img => {
    expect(img.draggable).toBe(false);
    expect(img.closest('a')).toBeNull();
  });
  const previous = screen.getByRole('link', { name: /2026 (한미 공동 세미나|ROK-U.S. Joint Seminar)/ });
  expect(previous.getAttribute('href')).toBe(`/${lang}/gallery/6`);
  fireEvent.click(screen.getByRole('link', { name: /갤러리로 돌아가기|Back to Gallery/ }));
  expect(screen.getAllByRole('img')[0].alt).toBe(title);
});

test.each([
  ['ko', false], ['ko', true], ['en', false], ['en', true],
])('%s gallery (detail: %s) cancels photo save gestures', (lang, detail) => {
  renderGallery(lang, detail);
  const photo = screen.getAllByRole('img')[0];
  const surface = photo.parentElement;
  for (const target of [photo, surface]) {
    expect(fireEvent.contextMenu(target)).toBe(false);
    expect(fireEvent.dragStart(target)).toBe(false);
    expect(fireEvent.copy(target)).toBe(false);
    expect(fireEvent(target, new MouseEvent('auxclick', { bubbles: true, cancelable: true, button: 1 }))).toBe(false);
    expect(fireEvent.mouseDown(target, { button: 1 })).toBe(false);
    for (const modifier of ['altKey', 'ctrlKey', 'metaKey', 'shiftKey']) {
      expect(fireEvent.click(target, { [modifier]: true })).toBe(false);
    }
  }
  expect(fireEvent.contextMenu(screen.getByRole('link', { name: 'Home' }))).toBe(true);
});

test.each(['ko', 'en'])('%s save shortcut and robots rules are scoped to gallery', async (lang) => {
  renderGallery(lang, true);
  expect(fireEvent.keyDown(document, { key: 's', ctrlKey: true })).toBe(false);
  expect(fireEvent.keyDown(document, { key: 'S', metaKey: true, shiftKey: true })).toBe(false);
  expect(fireEvent.keyDown(document, { key: 'f', ctrlKey: true })).toBe(true);
  await waitFor(() => {
    expect(document.querySelector('meta[name="robots"]').content)
      .toBe('noindex, nofollow, noimageindex, max-image-preview:none');
  });

  fireEvent.click(screen.getByRole('link', { name: 'Home' }));
  expect(fireEvent.keyDown(document, { key: 's', ctrlKey: true })).toBe(true);
  expect(fireEvent.keyDown(document, { key: 's', metaKey: true })).toBe(true);
  await waitFor(() => expect(document.querySelector('meta[name="robots"]')).toBeNull());
});
