import React from 'react';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
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

const carouselGalleries = [
  {
    lang: 'ko',
    title: '2026 고려대학교 정보보호대학원 교우회 정기등반대회',
    workshopTitle: '2026 제5회 금융보안워크숍',
    singlePhotoTitle: '2026 한미 공동 세미나',
    previousLabel: '이전 사진',
    nextLabel: '다음 사진',
    heading: '갤러리',
  },
  {
    lang: 'en',
    title: '2026 KUSC Alumni Hike',
    workshopTitle: '2026 5th Financial Security Workshop',
    singlePhotoTitle: '2026 ROK-U.S. Joint Seminar',
    previousLabel: 'Previous photo',
    nextLabel: 'Next photo',
    heading: 'Gallery',
  },
];

test.each(carouselGalleries)('$lang card arrows wrap photos without opening the post or changing other cards', ({
  lang, title, workshopTitle, previousLabel, nextLabel, heading,
}) => {
  renderGallery(lang);
  const photo = () => screen.getByRole('img', { name: title }).getAttribute('src');
  const workshopPhoto = () => screen.getByRole('img', { name: workshopTitle }).getAttribute('src');
  const previous = screen.getByRole('button', { name: `${title}: ${previousLabel}` });
  const next = screen.getByRole('button', { name: `${title}: ${nextLabel}` });
  const images = ['260919_01.jpg', '260919_02.jpeg', '260919_03.jpeg']
    .map(filename => `${process.env.PUBLIC_URL}/gallery/${filename}`);

  expect(photo()).toBe(images[0]);
  expect(previous.closest('a')).toBeNull();
  expect(next.closest('a')).toBeNull();
  for (const index of [2, 1, 0]) {
    fireEvent.click(previous);
    expect(photo()).toBe(images[index]);
  }
  for (const index of [1, 2, 0]) {
    fireEvent.click(next);
    expect(photo()).toBe(images[index]);
  }

  fireEvent.click(next);
  expect(workshopPhoto()).toBe(`${process.env.PUBLIC_URL}/gallery/260911_01.jpeg`);
  fireEvent.click(screen.getByRole('button', { name: `${workshopTitle}: ${nextLabel}` }));
  expect(workshopPhoto()).toBe(`${process.env.PUBLIC_URL}/gallery/260911_02.jpg`);
  expect(photo()).toBe(images[1]);
  fireEvent.click(screen.getByRole('button', { name: `${workshopTitle}: ${previousLabel}` }));
  expect(workshopPhoto()).toBe(`${process.env.PUBLIC_URL}/gallery/260911_01.jpeg`);
  expect(photo()).toBe(images[1]);
  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(heading);
});

test.each(carouselGalleries)('$lang single-photo cards have no carousel controls', ({ lang, singlePhotoTitle }) => {
  renderGallery(lang);
  const photo = screen.getByRole('img', { name: singlePhotoTitle });
  const card = photo.closest('article');

  expect(card).not.toBeNull();
  expect(within(card).queryAllByRole('button')).toHaveLength(0);
  expect(photo.closest('a').getAttribute('href')).toBe(`/${lang}/gallery/6`);
});

test.each(carouselGalleries.flatMap(gallery => ['photo', 'body'].map(surface => ({ ...gallery, surface }))))(
  '$lang $surface link still opens a multi-photo post after changing the card photo',
  ({ lang, title, nextLabel, surface }) => {
    renderGallery(lang);
    fireEvent.click(screen.getByRole('button', { name: `${title}: ${nextLabel}` }));
    const photo = screen.getByRole('img', { name: title });
    const link = surface === 'photo' ? photo.closest('a') : screen.getByText(title).closest('a');

    expect(link.getAttribute('href')).toBe(`/${lang}/gallery/8`);
    fireEvent.click(link);
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(title);
    expect(screen.getAllByRole('img').map(img => img.getAttribute('src'))).toEqual([
      `${process.env.PUBLIC_URL}/gallery/260919_01.jpg`,
      `${process.env.PUBLIC_URL}/gallery/260919_02.jpeg`,
      `${process.env.PUBLIC_URL}/gallery/260919_03.jpeg`,
    ]);
  }
);

test.each([
  ['ko', '2026 제5회 금융보안워크숍', '서울 여의도 FKI타워'],
  ['en', '2026 5th Financial Security Workshop', 'FKI Tower, Yeouido, Seoul'],
])('%s workshop opens both requested photos', (lang, title, location) => {
  renderGallery(lang);
  const thumbnail = screen.getByRole('img', { name: title });
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
  expect(screen.getByRole('img', { name: title })).toBeTruthy();
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
