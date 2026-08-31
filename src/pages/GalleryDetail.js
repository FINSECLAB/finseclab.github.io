import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Seo from '../components/Seo';
import './Gallery.css';
import { getAllGallerySorted, getGalleryById } from '../data/galleryData';

const GalleryDetail = () => {
  const { id } = useParams();
  const item = getGalleryById(id);

  if (!item) {
    return <Navigate to="/en/gallery" replace />;
  }

  const allSorted = getAllGallerySorted();
  const currentIndex = allSorted.findIndex(g => g.id === item.id);
  const prevItem = allSorted[currentIndex + 1];
  const nextItem = allSorted[currentIndex - 1];

  const bannerSrc = `${process.env.PUBLIC_URL}/background/gallery.jpg`;

  return (
    <div className="gallery-page gallery-detail-page">
      <Seo routeKey="gallery" />

      <div className="page-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
        <h1>Gallery</h1>
      </div>

      <div className="page-content gallery-detail-content">
        <Link to="/en/gallery" className="gallery-detail-back">&larr; Back to Gallery</Link>

        <h2 className="gallery-detail-title">{item.title}</h2>
        <div className="gallery-detail-meta">
          <span>{item.date}</span>
          {item.location && (
            <>
              <span className="gallery-detail-meta-divider">·</span>
              <span>{item.location}</span>
            </>
          )}
        </div>

        <div className="gallery-detail-images">
          {item.images.map((src, i) => (
            <div key={i} className="gallery-detail-image-wrapper" onContextMenu={(e) => e.preventDefault()}>
              <img
                src={src}
                alt={item.title}
                className="gallery-detail-image"
                draggable={false}
              />
            </div>
          ))}
        </div>

        <div className="gallery-detail-nav">
          {prevItem ? (
            <Link to={`/en/gallery/${prevItem.id}`} className="gallery-detail-nav-link gallery-detail-nav-prev">
              <span className="gallery-detail-nav-label">&lsaquo; Previous</span>
              <span className="gallery-detail-nav-title">{prevItem.title}</span>
            </Link>
          ) : (
            <span className="gallery-detail-nav-link disabled">
              <span className="gallery-detail-nav-label">&lsaquo; Previous</span>
            </span>
          )}
          {nextItem ? (
            <Link to={`/en/gallery/${nextItem.id}`} className="gallery-detail-nav-link gallery-detail-nav-next">
              <span className="gallery-detail-nav-label">Next &rsaquo;</span>
              <span className="gallery-detail-nav-title">{nextItem.title}</span>
            </Link>
          ) : (
            <span className="gallery-detail-nav-link gallery-detail-nav-next disabled">
              <span className="gallery-detail-nav-label">Next &rsaquo;</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
