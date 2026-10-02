import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import GalleryKo from './Gallery_ko';
import GalleryDetail from './GalleryDetail';
import GalleryDetailKo from './GalleryDetail_ko';

const albumImages = [
  '261001_01.jpeg',
  '261001_02.png',
  '261001_03.jpeg',
  '261001_04.jpeg',
  '261001_05.jpeg',
  '261002_01.jpeg',
  '261002_02.jpeg',
  '261002_03.jpeg',
  '261002_04.jpeg',
  '261002_05.jpeg',
  '261002_06.jpeg',
].map(filename => `${process.env.PUBLIC_URL}/gallery/${filename}`);

const albums = [
  {
    lang: 'ko',
    title: '가을맞이 금융보안연구실 MT',
    date: '2026.10.01.(목)-2026.10.02.(금)',
    location: '제주도',
    workshopTitle: '2026 제19회 CPS 보안 워크숍',
    previousPhoto: '이전 사진',
    nextPhoto: '다음 사진',
    heading: '갤러리',
  },
  {
    lang: 'en',
    title: 'FinSec LAB Autumn MT',
    date: '2026.10.01. (Thu) - 2026.10.02. (Fri)',
    location: 'Jeju Island',
    workshopTitle: '2026 19th CPS Security Workshop',
    previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    heading: 'Gallery',
  },
];

const renderAlbum = (lang, detail = false) => render(
  <HelmetProvider>
    <MemoryRouter
      initialEntries={[`/${lang}/gallery${detail ? '/10' : ''}`]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/ko/gallery" element={<GalleryKo />} />
        <Route path="/en/gallery" element={<Gallery />} />
        <Route path="/ko/gallery/:id" element={<GalleryDetailKo />} />
        <Route path="/en/gallery/:id" element={<GalleryDetail />} />
      </Routes>
    </MemoryRouter>
  </HelmetProvider>
);

test.each(albums)('$lang newest album starts at its cover and cycles every photo in order', ({
  lang, title, previousPhoto, nextPhoto, heading, workshopTitle,
}) => {
  renderAlbum(lang);
  const cards = screen.getAllByRole('article');
  expect(within(cards[0]).getByRole('img').alt).toBe(title);
  expect(within(cards[1]).getByRole('img').alt).toBe(workshopTitle);

  const photo = () => screen.getByRole('img', { name: title }).getAttribute('src');
  const previous = screen.getByRole('button', { name: `${title}: ${previousPhoto}` });
  const next = screen.getByRole('button', { name: `${title}: ${nextPhoto}` });
  expect(photo()).toBe(albumImages[1]);

  fireEvent.click(previous);
  expect(photo()).toBe(albumImages[0]);
  fireEvent.click(next);
  expect(photo()).toBe(albumImages[1]);
  for (const index of [2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1]) {
    fireEvent.click(next);
    expect(photo()).toBe(albumImages[index]);
  }
  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(heading);
});

test.each(albums)('$lang album opens an ordered mosaic and leaves the previous workshop layout intact', ({
  lang, title, date, location, workshopTitle,
}) => {
  const { container } = renderAlbum(lang);
  const cardLink = screen.getByRole('img', { name: title }).closest('a');
  expect(cardLink.getAttribute('href')).toBe(`/${lang}/gallery/10`);
  fireEvent.click(cardLink);

  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(title);
  expect(screen.getByText(date)).toBeTruthy();
  expect(screen.getByText(location)).toBeTruthy();
  const mosaic = container.querySelector('.gallery-detail-images--mosaic');
  expect(mosaic).not.toBeNull();
  expect(within(mosaic).getAllByRole('img').map(img => img.getAttribute('src'))).toEqual(albumImages);
  expect(screen.getAllByRole('img')).toHaveLength(11);

  const previous = screen.getByRole('link', { name: new RegExp(workshopTitle) });
  expect(previous.getAttribute('href')).toBe(`/${lang}/gallery/9`);
  fireEvent.click(previous);
  expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(workshopTitle);
  expect(container.querySelector('.gallery-detail-images--mosaic')).toBeNull();
  expect(screen.getAllByRole('img').map(img => img.getAttribute('src'))).toEqual([
    `${process.env.PUBLIC_URL}/gallery/261001_00.jpeg`,
  ]);
});

test.each(albums)('$lang mosaic retains image save gesture prevention', ({ lang }) => {
  renderAlbum(lang, true);
  const photos = screen.getAllByRole('img');
  expect(photos).toHaveLength(11);
  photos.forEach(photo => {
    expect(photo.draggable).toBe(false);
    expect(photo.closest('a')).toBeNull();
    const wrapper = photo.closest('.gallery-detail-image-wrapper');
    expect(wrapper).not.toBeNull();
    for (const target of [photo, wrapper]) {
      expect(fireEvent.contextMenu(target)).toBe(false);
      expect(fireEvent.dragStart(target)).toBe(false);
    }
  });
});
