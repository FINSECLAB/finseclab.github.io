import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import Pagination from '../components/Pagination';
import GalleryPage from '../components/GalleryPage';
import GalleryCard from '../components/GalleryCard';
import './Gallery.css';
import { getAllGallerySorted } from '../data/galleryData';

const ITEMS_PER_PAGE = 6;

const Gallery = () => {
  const allGallery = getAllGallerySorted();

  const location = useLocation();
  const navigate = useNavigate();
  const page = parseInt(new URLSearchParams(location.search).get('page') || '1', 10);

  const bannerSrc = `${process.env.PUBLIC_URL}/background/gallery.jpg`;

  const totalPages = Math.ceil(allGallery.length / ITEMS_PER_PAGE);
  const displayed = allGallery.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const setPage = (p) => {
    const params = new URLSearchParams(location.search);
    params.set('page', String(p));
    navigate({ pathname: location.pathname, search: `?${params}` });
  };

  return (
    <GalleryPage>
      <Seo routeKey="gallery" />

      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>Gallery</h1>
      </div>

      {/* Content */}
      <div className="page-content">
        <h2 className="page-section-title">Gallery</h2>
        <hr className="page-section-divider" />

        <div className="gallery-grid">
          {displayed.map((item) => (
            <GalleryCard key={item.id} item={item} to={`${location.pathname}/${item.id}`} lang="en" />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </GalleryPage>
  );
};

export default Gallery;
